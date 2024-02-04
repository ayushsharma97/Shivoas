import React from 'react';
import HeroStyle5 from '../Hero/HeroStyle5';
import Cta from '../Cta';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import PostCarousel from '../Slider/PostCarousel';
import PricingTableList from '../PricingTable/PricingTableList';
import TestimonialSliderStyle2 from '../Slider/TestimonialSliderStyle2';
import FunFact from '../FunFact';
import VideoModal from '../VideoModal';
import IconboxStyle4 from '../IconBox/IconboxStyle4';
import Card from '../Card';
import CardStyle2 from '../Card/CardStyle2';
import SectionHeadingStyle2 from '../SectionHeading/SectionHeadingStyle2';
import IconBoxStyle5 from '../IconBox/IconBoxStyle5';
import BrandCarousel from '../Slider/BrandCarousel';
import { pageTitle } from '../../helpers/PageTitle';
import IconBoxStyle6 from '../IconBox/IconBoxStyle6'
const brandData = [
  { logoSrc: '/images/tech-startup/brand_1.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_2.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_3.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_4.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_5.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_6.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_1.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_2.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_3.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_4.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_5.svg', alt: 'Brand' },
  { logoSrc: '/images/tech-startup/brand_6.svg', alt: 'Brand' },
];
const funfactData = [
  { title: 'Happy Customers', number: '22k' },
  { title: 'Work’s Completed', number: '15k' },
  { title: 'Skilled Team Members', number: '121' },
  { title: 'Most Valuable Awards', number: '15' },
];
const testimonialData = [
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ansari Patron',
    avatarDesignation: 'CEO at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Jhon Doe',
    avatarDesignation: 'Manager at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ramatam Coo',
    avatarDesignation: 'MD at Delta',
  },
];
const postData = [
  {
    thumbnailSrc: '/images/creative-agency/post_1.jpeg',
    title: 'How to keep fear from ruining your art business with confident',
    date: '07 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_2.jpeg',
    title: 'Artistic mind will be great for creation anything',
    date: '22 Apr 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_3.jpeg',
    title: 'AI will take over all job for human within few years',
    date: '13 May 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_4.jpeg',
    title: 'Your agency need to replace some artistic mind people',
    date: '15 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_1.jpeg',
    title: 'How to keep fear from ruining your art business with confident',
    date: '07 Mar 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_2.jpeg',
    title: 'Artistic mind will be great for creation anything',
    date: '22 Apr 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_3.jpeg',
    title: 'AI will take over all job for human within few years',
    date: '13 May 2023',
    url: '/blog/blog-details',
  },
  {
    thumbnailSrc: '/images/creative-agency/post_4.jpeg',
    title: 'Your agency need to replace some artistic mind people',
    date: '15 Mar 2023',
    url: '/blog/blog-details',
  },
];

export default function TechStartupPage() {
  pageTitle('Tech Startup Agency');
  return (
    <>
      <HeroStyle5
        highlightTitle="Award Wining Startup on 2023"
        title="Empowering Businesses with <br /> Our Startup Agency"
        subTitle="Harness the boundless potential of Artificial Intelligence to transcend the realms of imagination and create <br>mesmerizing masterpieces that time and space, captivating hearts and minds with beauty."
        btnText="See All Project"
        btnUrl="/portfolio"
        videoSrc="https://www.youtube.com/embed/VcaAVWtP48A"
        videoBtnText="Play Video"
      />
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Our aim is to improve tech based <br /> solution on business"
            subTitle="Features"
            variant="cs_type_1"
          />
          <Spacing lg="85" md="45" />
          <div className="row g-3">
            <div className="col-lg-6">
              <IconboxStyle4
                iconSrc="/images/tech-startup/feature_icon_1.svg"
                title="Data analysis and insights"
                subTitle="AI can analyze large volumes of data quickly and accurate, valuable logtiguiative insights for decision."
                btnText="Learn More"
                btnUrl="/service-details"
              />
            </div>
            <div className="col-lg-6">
              <IconboxStyle4
                iconSrc="/images/tech-startup/feature_icon_2.svg"
                title="Supply chain optimization"
                subTitle="Optimize supply chain processes by analyzing historical data, demand patterns, and external factors."
                btnText="Learn More"
                btnUrl="/service-details"
              />
            </div>
            <div className="col-lg-12">
              <IconboxStyle4
                iconSrc="/images/tech-startup/feature_icon_2.svg"
                title="Supply chain optimization"
                subTitle="Optimize supply chain processes by analyzing historical data, demand patterns, and external factors."
                btnText="Learn More"
                btnUrl="/service-details"
              />
            </div>
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section>
      <section className="cs_primary_bg">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeadingStyle2
            title="Imaginative solutions that drive <br />creativity & innovation."
            subTitle="Features"
            btnText="Learn More"
            btnUrl="/about"
          />
          <Spacing lg="85" md="45" />
          <div className="cs_working_process_wrap cs_center">
            <div className="cs_working_process">
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_1.png"
                  iconSrc="/images/icons/search.svg"
                  title="Research"
                // subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_2.png"
                  iconSrc="/images/icons/idea.svg"
                  title="Idea Generate"
                // subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_3.png"
                  iconSrc="/images/icons/gear.svg"
                  title="Implement"
                // subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                />
              </div>
            </div>
          </div>
          <Spacing lg="50" md="80" />

          <div className="cs_working_process_wrap cs_center">
            <div className="cs_working_process">
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_1.png"
                  iconSrc="/images/icons/search.svg"
                  title="Research"
                // subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_2.png"
                  iconSrc="/images/icons/idea.svg"
                  title="Idea Generate"
                // subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                />
              </div>
              <div className="cs_working_process_col">
                <IconBoxStyle6
                  bgSrc="/images/others/process_3.png"
                  iconSrc="/images/icons/gear.svg"
                  title="Implement"
                // subTitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem own disilope accusantium doloremque laudantium, totam remen."
                />
              </div>
            </div>
          </div>
        </div>
        <Spacing lg="150" md="80" />
      </section>
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Our aim is to improve tech based <br /> solution on business"
            subTitle="Services"
            variant="cs_type_1"
          />
          <Spacing lg="85" md="45" />
          <div className="row g-3">
            <div className="col-lg-6 col-xl-4">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_1.svg"
                title="Chat Bot"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <div className="col-lg-6 col-xl-4">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_2.svg"
                title="Email Client"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <div className="col-lg-6 col-xl-4">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_3.svg"
                title="AI Algorithm"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <Spacing lg="20" md="70" />
            <div className="col-lg-6 col-xl-4">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_1.svg"
                title="Chat Bot"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <div className="col-lg-6 col-xl-4">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_2.svg"
                title="Email Client"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
            <div className="col-lg-6 col-xl-4">
              <IconBoxStyle5
                iconSrc="/images/tech-startup/service_icon_3.svg"
                title="AI Algorithm"
                subTitle="AI can analyze large volumes of data quickly and accurately, extracting valuable insights for decision making."
                href="/service-details"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cs_p76_full_width cs_gray_bg_2">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Exploring the world of innovation <br />in our recent news"
            subTitle="Our Blog"
            variant="cs_type_1"
          />
          <Spacing lg="85" md="45" />
        </div>
        <PostCarousel data={postData} />
        <Spacing lg="150" md="80" />
      </section>
      <section>
        <Spacing lg="150" md="80" />
        <div className="container">
          <Cta
            title="Is there a specific project or goal that you have in mind?"
            btnText="Contact Us"
            btnUrl="/contact"
            bgUrl="/images/tech-startup/cta_bg.jpeg"
            noShape
          />
        </div>
        <Spacing lg="150" md="80" />
      </section>
    </>
  );
}
