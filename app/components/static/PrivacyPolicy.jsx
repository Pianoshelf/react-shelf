
import Helmet from 'react-helmet';
import Markdown from 'react-markdown';
import React from 'react';

import NavBar from '../fixtures/NavBar';
import Footer from '../fixtures/Footer';
import ResponsiveContainer from '../ResponsiveContainer';

let input = `

# Privacy Policy

This privacy policy has been compiled to better serve those who are concerned with how their
'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law
and information security, is information that can be used on its own or with other information to
identify, contact, or locate a single person, or to identify an individual in context. Please read
our privacy policy carefully to get a clear understanding of how we collect, use, protect or
otherwise handle your Personally Identifiable Information in accordance with our website.

## What personal information do we collect from the people that visit our blog, website or app?

When ordering or registering on our site, as appropriate, you may be asked to enter your email
address or other details to help you with your experience.

## When do we collect information?

We collect information from you when you register on our site or enter information on our site. This
can include your name, profile photo, comments, likes, email address you used to sign up, and any
other information you provide us.

## How do we use your information?

We may use the information we collect from you when you register, make a purchase, sign up for our
newsletter, respond to a survey or marketing communication, surf the website, or use certain other
site features in the following ways:

* To personalize user's experience and to allow us to deliver the type of content and product
  offerings in which you are most interested.
* To improve our website in order to better serve you.
* To allow us to better service you in responding to your customer service requests.
* To send periodic emails regarding your order or other products and services.

## How do we protect visitor information?

Your personal information is contained behind secured networks and is only accessible by a limited
number of persons who have special access rights to such systems, and are required to keep the
information confidential. In addition, all sensitive/credit information you supply is encrypted via
Secure Socket Layer (SSL) technology.

## Cookies

Cookies are small files that a site or its service provider transfers to your computer's hard drive
through your Web browser (if you allow) that enables the site's or service provider's systems to
recognize your browser and capture and remember certain information. They are also used to help us
understand your preferences based on previous or current site activity, which enables us to provide
you with improved services. We also use cookies to help us compile aggregate data about site traffic
and site interaction so that we can offer better site experiences and tools in the future. We use
cookies to understand and save user's preferences for future visits.

## Third Party Disclosure

We do not sell, trade, or otherwise transfer to outside parties your personally identifiable
information unless we provide you with advance notice. This does not include website hosting
partners and other parties who assist us in operating our website, conducting our business, or
servicing you, so long as those parties agree to keep this information confidential. We may also
release your information when we believe release is appropriate to comply with the law, enforce our
site policies, or protect ours or others' rights, property, or safety.

However, non-personally identifiable visitor information may be provided to other parties for
marketing, advertising, or other uses.

## Third Party Links

Occasionally, at our discretion, we may include or offer third party products or services on our
website. These third party sites have separate and independent privacy policies. We therefore have
no responsibility or liability for the content and activities of these linked sites. Nonetheless,
we seek to protect the integrity of our site and welcome any feedback about these sites.

## Google

Google's advertising requirements can be summed up by
[Google's Advertising Principles](https://support.google.com/adwordspolicy/answer/1316548?hl=en).
They are put in place to provide a positive experience for users. We use Google AdSense Advertising
on our website. Google, as a third party vendor, uses cookies to serve ads on our site. Google's use
of the DART cookie enables it to serve ads to our users based on their visit to our site and other
sites on the Internet. Users may opt out of the use of the DART cookie by visiting the Google ad and
content network privacy policy.

We have implemented the following:

* Remarketing with Google AdSense
* Google Display Network Impression Reporting
* Demographics and Interests Reporting

We along with third-party vendors, such as Google use first-party cookies (such as the Google
Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party
identifiers together to compile data regarding user interactions with ad impressions, and other ad
service functions as they relate to our website.

## COPPA (Children Online Privacy Protection Act)

When it comes to the collection of personal information from children under 13, the Children's
Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, the
nation's consumer protection agency, enforces the COPPA Rule, which spells out what operators of
websites and online services must do to protect children's privacy and safety online. We do not
specifically market to children under 13.

## If at any time you would like to unsubscribe from receiving future emails:

You can follow the instructions at the bottom of each email, and we will promptly remove you from
ALL correspondence.

## Contacting Us

If there are any questions regarding this privacy policy you may contact us using the information
below.

[admin@pianoshelf.com](mailto:admin@pianoshelf.com)

`;

export default React.createClass({
  render() {
    return (
      <Helmet title="Privacy Policy">
        <div className="static">
          <NavBar />
          <ResponsiveContainer className="static__container">
            <Markdown className="static__markdown" source={input} />
          </ResponsiveContainer>
          <Footer />
        </div>
      </Helmet>
    );
  },
});
