import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { NavBarDesktop } from '../components/navbar/NavBarDesktop';
import { NavBarMobile } from '../components/navbar/NavBarMobile';
import { HomePage } from '../components/home/HomePage';
import { Footer } from '../components/footer/Footer';
import { PastTrials } from '../components/otherpages/pasttrials/PastTrials';
import { HowItWorks } from '../components/otherpages/howitworks/HowItWorks';
import { MoreInfoPope } from '../components/otherpages/infopope/MoreInfoPope';
import { TermsAndConditions } from '../components/otherpages/terms/TermsAndConditions';
import { PrivacyPolicy } from '../components/otherpages/privacypolicy/PrivacyPolicy';
import { ContactUs } from '../components/otherpages/contactus/ContactUs';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBarDesktop />
                <NavBarMobile />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/past-trials" component={PastTrials} />
                    <Route exact path="/how-it-works" component={HowItWorks} />
                    <Route exact path="/information-pope" component={MoreInfoPope} />
                    <Route exact path="/terms" component={TermsAndConditions} />
                    <Route exact path="/privacy" component={PrivacyPolicy} />
                    <Route exact path="/contact-us" component={ContactUs} />

                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div >
        </Router >
    )
}
