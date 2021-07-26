import styled from 'styled-components';

export const Group = styled.ol`
  margin: 0px;
  padding: 0px;
  width: 300px;
  display: inline-block;
  text-align: left;
  li {
    margin: 3px 0;
  }
  li::marker {
    color: #cecece;
  }
`;

export const DetailsBlock = styled.div`
  background: #dddddd;
  padding: 7px;
  span {
    color: #295ea3;
    margin-right: 5px;
  }
  p {
    margin: 5px;
  }
  a:hover {
    text-decoration: none;
  }
`;
