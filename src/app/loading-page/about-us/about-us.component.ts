import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  backgroundImageUrl="AboutAup.jpeg";
  Founderimg="FounderImg.png";
  AboutStoryimg="AboutStory.jpeg";
  linkedinEmoji="LinkedinEmoji.png";


  UIPayTeam=[
    {image:'UIPayTeamone.jpeg',name:"Name",Desination:"Co-founder & CEO, Capital Hub"},
    {image:'UIPayTeamtwo.jpeg',name:"Name",Desination:"Co-founder & CEO, Capital Hub"},
    {image:'UIPayTeamthree.jpeg',name:"Name",Desination:"CEO, Broking"},
    {image:'UIPayTeamfour.jpeg',name:"Name",Desination:"CTO, Broking"},
  ]

  UIPayValue=[
    {image:"UIPayValueEmoji1.png",contentHead:"We are commited.",contentpara:"We are deeply committed to providing a reliable and trust worthy EMI tracking platform that meets the needs of our users. We strive to deliver exceptional service and go above and beyond to ensure your satisfaction. Our team is dedicated to continually improving our platform to exceed your expectations and help you achieve your financial goals."},
    {image:"UIPayValueEmoji2.png",contentHead:"We are responsible.",contentpara:"we are Responsible: We understand the importance of handling your financial information with the most care and responsibility. We and here to strict data protection measures and company with all relevant regulations to safeguard your privacy. Your trust in us is highly valued, and we take our responsibility to protect your personal and financial data seriously."},
    {image:"UIPayValueEmoji3.png",contentHead:"We aim for progress.",contentpara:"We aim for Progress: We are passionate about progress and believe in the power of continuous improvement. We are constantly exploring new technologies, industry trends, and user feedback to enhance our EMI tracking platform."}
  ]

}
