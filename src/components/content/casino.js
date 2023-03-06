import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContentHeader, Wrapper } from './content';
import ScrollContainer from 'react-indiana-drag-scroll';
import '../../theme/style.css';
import ButtonCategory from '../buttons/buttonCategory';
import SearchInput from '../inputs/searchField';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../store/categories/actions';
import { getGame } from '../../store/games/actions';
import CircleProgress from '../progress/circleProgress';
import { description } from '../../helpers/helpers';
import SwipeIcon from '@mui/icons-material/Swipe';
import ResponsiveAppBar from './nav/navbar';

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '1300px',
  backgroundColor: theme.palette.background.content.background,
  boxShadow: `0px 8px 8px ${theme.palette.shadow.login.color}`,
  color: theme.palette.white.main,
  padding: '10px 20px 10px',
  borderRadius: theme.palette.shape.borderRadiusDefault,
  marginTop: 12,
  minHeight: 500,
}));

const CategoryWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '1300px',
  backgroundColor: theme.palette.background.content.background,
  boxShadow: `0px 8px 8px ${theme.palette.shadow.login.color}`,
  color: theme.palette.white.main,
  padding: '10px 20px 10px',
  borderRadius: theme.palette.shape.borderRadiusDefault,
}));

const Casino = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const game = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getGame());
  }, [dispatch]);

  const [view, setView] = useState('jackpot');

  const [filteredData, setFilteredData] = useState(game.data);

  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];

    result = game.data.filter((data) => {
      return data.name.search(value) !== -1 || data.provider.search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Grid sx={{ mt: 1.5 }} container alignItems="center" justifyContent="center">
        <Wrapper>
          <CategoryWrapper>
            <ContentHeader>
              <Typography sx={{ mt: 2.5 }} variant="h3" align="left">
                Casino Games
              </Typography>
            </ContentHeader>
            <Typography variant="body2" align="center" sx={{ mt: 3, mr: 1 }}>
              Swipe Left <SwipeIcon />
            </Typography>
            <ScrollContainer className="container">
              {!category.isLoading ? (
                category.data &&
                category.data.map((item, key) => {
                  return (
                    <div className="row" key={key}>
                      <ButtonCategory
                        selected={view === item.slug ? true : false}
                        value={item.slug}
                        onClick={() => setView(item.slug)}
                      >
                        <div>
                          <Typography variant="body5">{item.title}</Typography>
                          <Typography variant="body5">
                            {item.multilingual &&
                              item.multilingual.map((e) => {
                                return e.title;
                              })}
                          </Typography>
                        </div>
                      </ButtonCategory>
                    </div>
                  );
                })
              ) : (
                <CircleProgress />
              )}
            </ScrollContainer>
          </CategoryWrapper>
        </Wrapper>
        <ContentWrapper>
          <div style={{ width: 300, marginBottom: '15px' }}>
            <SearchInput variant="filled" label="Search by game or game provider" onChange={(e) => handleSearch(e)} />
          </div>
          <Grid container rowSpacing={1} columnSpacing={1} alignItems="center" justifyContent="center">
            {!game.isLoading ? (
              filteredData.length === 0 ? (
                game.data &&
                game.data.map((value, key) => {
                  if (view === value.category || view === value.extraCategories || view === value.type) {
                    return (
                      <Grid item key={key}>
                        <div className="imageContainer">
                          <img
                            className="image"
                            alt={value.name}
                            style={{ borderRadius: 8 }}
                            src={value.desktopThumbnail.url}
                          />
                          <div className="overlay">
                            <Typography variant="body1">{value.name}</Typography>
                            <Typography variant="body7">{description(value.desktopDescription)}</Typography>
                          </div>
                        </div>
                      </Grid>
                    );
                  }
                })
              ) : (
                filteredData &&
                filteredData.map((value, key) => {
                  if (view === value.category || view === value.extraCategories || view === value.type) {
                    return (
                      <Grid item key={key}>
                        <div className="imageContainer">
                          <img className="image" style={{ borderRadius: 8 }} src={value.desktopThumbnail.url} />
                          <div className="overlay">
                            <Typography variant="body1">{value.name}</Typography>
                            <Typography style={{ fontSize: 10 }}>{description(value.desktopDescription)}</Typography>
                          </div>
                        </div>
                      </Grid>
                    );
                  }
                })
              )
            ) : (
              <CircleProgress />
            )}
          </Grid>
        </ContentWrapper>
      </Grid>
    </>
  );
};

export default Casino;
