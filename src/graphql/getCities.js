import gql from 'graphql-tag';

//this query contains the major information about the jobs relatived with their countries

export const GET_CITIES = gql`
query cities{
    cities{
        name
        country{
            name
        }
        jobs(orderBy:createdAt_DESC){
            createdAt
        }
    }
}
`

