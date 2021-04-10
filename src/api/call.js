const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return (
      !response.ok 
        ? new Error(`NOT FOUND -> ${response.status}`) 
        : await response.json()
    );
  }

export default getData;