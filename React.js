Auto search filter:
const [userProfiles, setProfiles] = React.useState([]);
  const [filterDatas, setFilterDats] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => response.json())
      .then((json) => {
        setProfiles(json), setFilterDats(json);
      });
  }, []);

  const handleChange = (e) => {
    const state = userProfiles.filter((el) =>
      el.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterDats(state);
  };
  
  // use filterDatas to the UI layer
