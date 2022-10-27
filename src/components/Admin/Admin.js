import {OutlineButton} from '../../Globalstyles';
import SalmonImg from '../../images/salmon.png';
import ChickenImg from '../../images/Chicken.svg';
import PizzaImg from '../../images/Italian-pizza.svg';
import PastaImg from '../../images/Pasta.svg';
import SaladImg from '../../images/salad.png';
import {
    RecipeContainer,
    RecipeWrapper,
    RecipeTitle,
    RecipeContentContainer,
    RecipeTabContainer,
    RecipeBtn,
    RecipeCardWrapper,
    RecipeFeature,
    RecipeFeatureContent,
    RecipeFeatureTitle,
    RecipeFeatureText,
    RecipeFeatureDetails,
    RecipeFeatureItem,
    RecipeItemTitle,
    RecipeItemContent,
    RecipeItemIcon,
    RecipeItemText,
    RecipeCardSection,
    RecipeSmallCards,
    RecipeCard,
    RecipeCardContent,
    RecipeCardHeading,
    RecipeCardDetails,
    RecipeCardItems,
    RecipeCardTitle,
    RecipeCardItem,
    RecipeCardIcon,
    RecipeCardText,
    RecipeImg,
    Img,



} from './Recipes.styles';
const Recipes = () => {
    return (
        <div>
            <RecipeWrapper>
                <RecipeContainer>
                    <RecipeTitle>Items</RecipeTitle>
                    <RecipeContentContainer>
                       
                        <RecipeCardWrapper>
                           
                            <RecipeCardSection>
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        <Img src={ChickenImg} alt="Chicken Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                               Chicken
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                             
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>20%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={SaladImg} alt="Salad Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                 Egg
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                              
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>10%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                </RecipeSmallCards>
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        <Img src={PizzaImg} alt="Pizza Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                Vegetables
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                               
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>20%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={PastaImg} alt="Pasta Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                               Sea Food
                                            </RecipeCardHeading>
                                            <RecipeCardDetails>
                                                <RecipeCardItems>
                                                        <RecipeCardTitle>Serving</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                                
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Difficulty level</RecipeCardTitle>
                                                    <RecipeCardText>10%</RecipeCardText>
                                                </RecipeCardItems>

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                </RecipeSmallCards>

                            </RecipeCardSection>
                            
                        </RecipeCardWrapper>
                    </RecipeContentContainer>
                </RecipeContainer>
            </RecipeWrapper>
            
        </div>
    );
}

export default Recipes;