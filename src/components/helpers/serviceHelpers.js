export const fetchData = async (path) => {
    const response = await fetch(path);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
    alert("Api hatasi");
    return;
  };