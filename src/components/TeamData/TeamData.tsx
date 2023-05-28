import * as S from "./TeamData.styles";

type TeamDataProps = {
  name: string;
  logo: string;
  season: number;
};

const TeamData = ({ name, logo, season }: TeamDataProps) => {
  return (
    <S.HeadingContainer>
      <S.TeamContainer>
        <S.Logo src={logo} alt={name} />
        <S.NameSeasonContainer>
          <S.Name>{name}</S.Name>
          <S.Season>Temporada {season}</S.Season>
        </S.NameSeasonContainer>
      </S.TeamContainer>
    </S.HeadingContainer>
  );
};

export default TeamData;
