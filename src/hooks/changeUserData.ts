
const changeUserData = (data: string) => {
    fetch(`${process.env.REACT_APP_MOCKAPI}/users/${localStorage.getItem('userID')}`, {
      method: 'PUT',
      body:  data,
      headers: {
          'content-type': 'application/json'
      }
    })
    .then(data => data.text())
    .catch(e => alert(e))
};

export default changeUserData;