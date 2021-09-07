// attempt at getting it to return the dapperID of a fixed username. Cannot get it to work outside of Postman

const { username } = document.getElementById("input").innerHTML;

var data = JSON.stringify({
  query: `query getUserProfileByUsername ($input: getUserProfileByUsernameInput!) {
      getUserProfileByUsername (input: $input) {
          publicInfo {
              dapperID
          }
      }
  }`,
  variables: { input: { username } }
});


var config = {
  method: "post",
  url: "https://public-api.nbatopshot.com/graphql",
  headers: {
    "Content-Type": "application/json"
  },
  data
};


axios(config)
.then(function (response) {
  const userID =
    response.data.data.getUserProfileByUsername.publicInfo.dapperID;

    console.log(userID);
  })


  // From here i would use...

  /* 
    query searchMintedMoments ($input: SearchMintedMomentsInput!) {
    searchMintedMoments (input: $input) {
        data {
            filters {
                byOwnerDapperID
            }
            searchSummary {
                data {
                    data {
                        sortID
                    }
                    size
                }
            }
        }
    }
}

This however only gives sortID and how many moments they have. In order to get Data on a moment I think I need the playID and/or the setID. 

getUserProfileByUsername should be able to give the appropriate data on the moments, but seems to return empty on Postman

  "input": {
     "setID": "Get Set ID from above?",
      "playID": "Get Play ID from above?"
    }

  query GetUserMomentListingsDedicated($input: GetUserMomentListingsInput!) {
  getUserMomentListings(input: $input) {
    data {
      play {
        ... on Play {
          ...PlayDetails
          __typename
        }
        __typename
      }

    fragment PlayDetails on Play {
      id
      description
      stats {
        playerName
        primaryPosition
      }
      statsPlayerGameScores {
        blocks
        points
        steals
        assists
        rebounds
      }
      __typename
}

  Basic idea would be that on username input, a table would populate with the moments they owned, and they would have a "+" button to 
  add them to their team. This table would also show the values for each play type.

  I would also need to get the thumbnail image associated with the moment and the video url.

  Ideally I would be storing all of those values in an array.

  */
