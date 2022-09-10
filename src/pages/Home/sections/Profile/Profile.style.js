import styled from "styled-components";

const ProfileSt = styled.section`
  && {
    min-height: 120vh;
  }

  #profile-container {
    width: 100%;
    display: grid;
    justify-items: center;

    .image {
      justify-self: center;
      margin-bottom: 3rem;
      z-index: 1000;
    }

    #my-info-container {
      display: grid;
      justify-items: center;
      align-content: start;

      .my-info {
        font-size: 1.3vh;

        .blinker {
          background: white;
        }

        &.skills {
          color: #3bff00;

          .blinker {
            background: #3bff00;
          }
        }
      }
    }
  }
`;

export default ProfileSt;
