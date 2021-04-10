const filterData = (data, value) => {
    const toReturn = [];
    for (let i = 0; i < data.length; i++) {
      const { name } = data[i];
      const validate = name.toUpperCase().includes(value.toUpperCase());
      if(validate){
        toReturn.push(data[i])
      }
    }
    return toReturn;
}

export const filterPerson = (data, value) => {
    let toReturn = {}
    for (let i = 0; i < data.length; i++) {
        const { id } = data[i];
        if(id.toString() === value){
            toReturn = {...data[i]}
        }
    }
    return toReturn;
}

export default filterData;
