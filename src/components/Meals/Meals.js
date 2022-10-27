import {Button} from '../../Globalstyles';
import ChickenImg from '../../images/Big-chicken.svg';
import {
    MealsContainer,
    MealsWrapper,
    MealsImage,
    Img,
    MealsContent,
    MealsContentTitle,
    MealsContentText,
    MealsContentItems,
    MealsContentList,
    MealsContentDetails,
    MealsContentIcon,
    MealsContentCategory,
    MealsContentBtn
} from './Meals.styles';
function Meals() {
    return (
        <div>
            <MealsContainer>
                <MealsWrapper>
                    <MealsImage>
                        <Img src={ChickenImg} alt= "Personalized Chicken meal"/> 
                    </MealsImage>
                    <MealsContent>
                        
                        <MealsContentText>
                        Eat Fresh Stay Fresh
                        </MealsContentText>
                        <MealsContentTitle>REFRESH</MealsContentTitle>
                       
                        <MealsContentBtn to='/order-now'>
                            <Button big bigFont bigRadius>Order Now</Button>

                        </MealsContentBtn>
                    </MealsContent>
                </MealsWrapper>
            </MealsContainer>
            
        </div>
    )
}

export default Meals;
