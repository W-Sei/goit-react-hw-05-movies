import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ReturnBtn from 'components/ReturnBtn/ReturnBtn';
import {
  MainWrapper,
  Section,
  Image,
  InfoThumb,
  TitleWrapper,
  Title,
  SubTitle,
  InfoText,
  ExtraInfo,
  Wrapper,
  AditionalText,
  ExtraPagesList,
  Item,
  StyledLink,
  ArrowForward,
} from './MovieInfo.styled';
import noPoster from '../images/noMovie.png';

export function MovieInfo({ movieDetails }) {
  const { title, genres, poster, overview, releaseDate, vote } = movieDetails;
  const location = useLocation();
  const genresInfo = genres.map(genres => genres.name).join(', ');
  return (
    <MainWrapper>
      <Section>
        <Image
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : noPoster}
          alt={title}
        />
        <InfoThumb>
          <TitleWrapper>
            <Title>{title}</Title>
            <SubTitle>Vote: {vote}</SubTitle>
          </TitleWrapper>
          <SubTitle>Date release: {releaseDate}</SubTitle>
          <SubTitle>Overwiew:</SubTitle>
          <InfoText> {overview}</InfoText>
          <SubTitle>Genres:</SubTitle>
          <InfoText> {genresInfo}</InfoText>

          <ReturnBtn location={location} />
        </InfoThumb>
      </Section>

      <ExtraInfo>
        <Wrapper>
          <AditionalText>Aditional Information</AditionalText>
        </Wrapper>

        <ExtraPagesList>
          <Item>
            <StyledLink to="cast" state={location.state}>
              Cast
              <ArrowForward />
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews" state={location.state}>
              Reviews
              <ArrowForward />
            </StyledLink>
          </Item>
        </ExtraPagesList>
      </ExtraInfo>
    </MainWrapper>
  );
}

MovieInfo.propTypes = {
  movieDetails: PropTypes.shape({
    title: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    poster: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    vote: PropTypes.number,
  }),
};