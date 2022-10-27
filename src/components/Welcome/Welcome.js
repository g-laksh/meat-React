import {
    WelcomeContainer, 
    WelcomeContent,

    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText,
    
} from './Welcome.styles';

const Welcome = () => {
    return (
        <div>
            <WelcomeContainer>
                <WelcomeContent>
                   
                    <WelcomeContentText>
                        <WelcomeContentTitle>Welcome</WelcomeContentTitle>
                        <WelcomeText>
                        This a modern poultry farming app that helps Cusat students manage poultry batches, track flock, eggs and feed inventory. The app also comes with detailed visual and graphical reports such as egg production & reduction reports, feed purchase and usage reports, flock acquisition and reduction reports.
                        </WelcomeText>
                        <WelcomeText>
                            The order will be sent straight to your door step in less then 
                            1hr pre-packed for you in portions. 
                            Start cooking by folloing the visual guide in your order and serve your family a health meat.
                        </WelcomeText>
                    </WelcomeContentText>
                </WelcomeContent>
                

            </WelcomeContainer>
            
        </div>
    )
}

export default Welcome;
