import {OutlineButton} from '../../Globalstyles';

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
 
    RecipeCardSection,
    RecipeSmallCards,
    RecipeCard,
    RecipeCardContent,
    RecipeCardHeading,
    RecipeCardDetails,
   
   
    Img,



} from './Recipes.styles';
const Recipes = () => {
    return (
        <div>
            <RecipeWrapper>
                <RecipeContainer>
                    <RecipeTitle>Commodities</RecipeTitle>
                    <RecipeContentContainer>
                        <RecipeTabContainer>
                            <RecipeBtn to='/sea-food'>
                                <OutlineButton big bigFont bigRadius>Sea Food</OutlineButton>
                            </RecipeBtn>
                            <RecipeBtn to='/Vegetarian'>
                                <OutlineButton big bigFont bigRadius>Vegetarian</OutlineButton>  
                            </RecipeBtn>
                            <RecipeBtn to='/meat'>
                                <OutlineButton big bigFont bigRadius>Meat and Poultry</OutlineButton>
                            </RecipeBtn>
                            <RecipeBtn to='/easy-preps'>
                                <OutlineButton big bigFont bigRadius>Egg</OutlineButton>  
                            </RecipeBtn>
                           
                        </RecipeTabContainer>
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
                                                
                                               

                                            </RecipeCardDetails>
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={SaladImg} alt="Salad Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                 Vegetables
                                            </RecipeCardHeading>
                                           
                                        </RecipeCardContent>

                                    </RecipeCard>
                                </RecipeSmallCards>
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        <Img src={PizzaImg} alt="Pizza Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                                Egg
                                            </RecipeCardHeading>
                                           
                                        </RecipeCardContent>

                                    </RecipeCard>
                                    <RecipeCard>
                                        <Img src={PastaImg} alt="Pasta Recipe"/>
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                               Sea Food
                                            </RecipeCardHeading>
                                            
                                        </RecipeCardContent>

                                    </RecipeCard>

                                </RecipeSmallCards>
                                
                                <RecipeSmallCards>
                                    <RecipeCard>
                                        {/* <Img src={PizzaImg} alt="Pizza Recipe"/> */}
                                        <RecipeCardContent>
                                            <RecipeCardHeading>
                                             Fertilizers
                                            </RecipeCardHeading>
                                           
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
