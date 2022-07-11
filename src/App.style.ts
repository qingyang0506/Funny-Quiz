import styled,{createGlobalStyle} from "styled-components";
import BGImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  *{
    box-sizing: border-box;
    font-family: 'Catameran', sans-serif;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p{
        color: #fff;
    }
    
    .score{
        color: #fff;
        font-size: 2rem;
        margin: 40px 0;
    }

    .settings{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 70px;
    }

    .options{
        display: flex;
        min-width: 35vw;
        justify-content: space-between;
        margin-top: 40px;
        
        >select{
            background: linear-gradient(180deg, #ffffff, #7afffb);
            border: 1px solid #d38558;
            box-shadow: 0px 3px 7px rgba(0,0,0,0.25);
            border-radius: 5px;
            height: 25px;
            width: 120px;
            margin: 10px 20;
            padding: 0 10px;
        }
    }

    h1 {
        font-family: Fascinate Inline,HatFamilyMontserrat,sans-serif;
        background-image: linear-gradient(180deg, #fff, #87f1ff);
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 70px;
        text-align: center;
        margin: 20px;
      }

      .start{
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #7afffb);
        border: 2px solid #7afffb;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        width: 150px;
        margin: 30px 0;
        padding: 0 20px;
        font-size: 1.2rem;
      }

      .next{
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #7afffb);
        border: 2px solid #7afffb;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height: 40px;
        width: 150px;
        margin: 30px 0;
        padding: 0 20px;
      }
`