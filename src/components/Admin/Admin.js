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



} from './Admin.styles';

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
                                                        <RecipeCardTitle>Quantity</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>50kg</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                             
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Price</RecipeCardTitle>
                                                    <RecipeCardText>8000</RecipeCardText>
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
                                                        <RecipeCardTitle>Quantity</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>50</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                              
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Price</RecipeCardTitle>
                                                    <RecipeCardText>400</RecipeCardText>
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
                                                        <RecipeCardTitle>Quantity</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>2</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                               
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Price</RecipeCardTitle>
                                                    <RecipeCardText>20</RecipeCardText>
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
                                                        <RecipeCardTitle>Quantity</RecipeCardTitle>
                                                        <RecipeCardItem>
                                                            <RecipeCardIcon/>
                                                            <RecipeCardText>50</RecipeCardText>
                                                        </RecipeCardItem>

                                                    </RecipeCardItems>
                                                
                                                <RecipeCardItems>
                                                    <RecipeCardTitle>Price</RecipeCardTitle>
                                                    <RecipeCardText>500</RecipeCardText>
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