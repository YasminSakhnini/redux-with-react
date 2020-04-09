## Our App
  -Fetches a list of users from API end point and stores it in the redux store and then  
  renders it in the browser.


## State
  state = { 
      lading: true,            // display a loading spinner in the component
      data: [],               // list of users
      error: ''              //display error to the user
  }

## Actions
  **FETCH_USERS_REQUEST**       //fetch list of users
  **FETCH_USERS_SUCCESS**      //fetch successfully
  **FETCH_USERS_FAILURE**     //error fetching the data



## Reducers
  case: **FETCH_USERS_REQUEST** 
    loading: true

  case: **FETCH_USERS_SUCCESS** 
    loading: false,
    users: data (from API)    

  case: **FETCH_USERS_SUCCESS** 
    loading: false,
    error: error (from API)      