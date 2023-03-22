import { NavigationContainer } from "@react-navigation/native"
import TabsNavigator from "./TabsNavigator"

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    )
}

export default MainNavigation