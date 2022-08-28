import styled from "styled-components";

const ProfileSt = styled.section`
  > div {
    width: 100%;
    display: grid;
    justify-items: center;
  }

  .image {
    justify-self: center;
    margin-bottom: 3rem;
  }

  .my-info {
    color: #3bff00;

    .blinker {
      background: #3bff00;
    }
  }
`;

export default ProfileSt;
