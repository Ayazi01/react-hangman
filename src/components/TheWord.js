import styled from "styled-components";

const TheWord = ({word}) => {
 //if the letter clicked (or added into revealed) matches a letter from the word, takes place
 const maskedWord = word.str.split('').map(e => word.revealed.includes(e) ? e : "_").join(" ")
    return (
        <Wrapper>{maskedWord}</Wrapper>
    )
}

const Wrapper = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  display: flex;
`;
const Span = styled.span`
  display: block;
  border-bottom: ${(props) => (props.line ? "2px solid white" : "none")};
  width: 30px;
  margin: 0 3px;
  text-align: center;
`;

export default TheWord;
