import styled from "styled-components";

export default function DataItemComponent({ dataArr }) {
  return (
    <DataItemBox>
      {dataArr.map((item, index) => (
        <div key={`dataArr-${index}`}>{item}</div>
      ))}
    </DataItemBox>
  );
}

const DataItemBox = styled.div`
  background-color: lightgray;
`;
