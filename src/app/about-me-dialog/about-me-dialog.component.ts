import { Component, OnInit } from '@angular/core';

export interface Education {
  course: string;
  position: number;
  institute: string;
  place: string;
}

const ELEMENT_DATA1: Education[] = [
  {position: 1, course: 'Higher Secondary', institute: "R. K. Talereja College", place: 'Ulhasnagar'},
  {position: 2, course: 'Diploma in Nathropath and Yogic Sc.', institute: "..", place: 'Ulhasnagar'},
  {position: 3, course: 'Radio Jockey', institute: "R. K. Talereja College", place: 'Mumbai'},
  {position: 4, course: 'BSc. in Psycholgy', institute: "Annamalai University", place: 'Chidambaram'},
  {position: 5, course: 'Training', institute: "Sneha Desai", place: 'Mumbai'},
  {position: 6, course: 'Sahaj Yoga', institute: "BK's", place: 'Mumbai'},
  {position: 7, course: 'Computer Basic Course', institute: "Kirtee Computers", place: 'Badlapur'},
];

export interface Achiev {
  achievements: string;
  position: number;
}

const ELEMENT_DATA2: Achiev[] = [
  {position: 1, achievements: 'Swami Vivekananda Samman From Mumbai'},
  {position: 2, achievements: 'Swarnim Bharat Yuva Padyatra (Bikaner to Chandigardh)'},
  {position: 3, achievements: 'Daily 40 to 50 km Walking For 2Months'},
  {position: 4, achievements: 'My India Healthy India (Abu to Mumbai)'},
  {position: 5, achievements: 'One Month Ek shyam Prabhu ke Naam (Bihar)'},
  {position: 6, achievements: 'One week Yuva Metadore Rally (Mumbai to Ambernath)'},
  {position: 7, achievements: '15 Days Yuva Cycle Yatra (Abu Road to Bhinmal)'},
  {position: 8, achievements: '18 Days 12 Jyotilingam Yatra In Talengana (6 Times)'},
  {position: 9, achievements: 'Worked as an Actor in undocumented Film "Kalyani"'},
  {position: 10, achievements: 'Writer of Book "Arpan"  A collection of Poems ( Based on Spiritual & Love ) Available at Amazon & Flipkart.'},
];




@Component({
  selector: 'app-about-me-dialog',
  templateUrl: './about-me-dialog.component.html',
  styleUrls: ['./about-me-dialog.component.css']
})

export class AboutMeDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns1: string[] = ['position', 'course', 'institute', 'place'];
  dataSource1 = ELEMENT_DATA1;

  displayedColumns2: string[] = ['position', 'achievements'];
  dataSource2 = ELEMENT_DATA2;

  hindiQuote:string = "हम महसूस करते हैं कि हमारा जीवन मुख्यतः हमारी सोच के अनुरूप ही होता है। हम जिस समय जैसा सोच लेते हैं, कम से कम कुछ समय के लिए तो हमारी जिंदगी उसी के अनुसार बन जाती है। यदि हम अच्छा सोचते हैं, तो अच्छा लगने लगता है और यदि बुरा सोचते हैं, तो बुरा लगने लगता है। इस तरह यदि हम यह नतीजा निकालना चाहें कि मूलतः अनुभव ही जीवन है, तो शायद गलत नहीं होगा।"
  secoundEng = "Our Life is nothing but Experiences. Life is an experience of Happiness, sorrow, Peace.  Good and Bad whatever comes to you just enjoy it  than only you will be in Peace."




  finalQuotes1 = "I was born in Ambernath the Holy Place of God Shiva. A very Famous Historical Temple Named Shiv Mandir. Many people from outside come and visit every Monday it has huge crowd. Myself with Family also used to go and sit their and experience Peace. It is near Mumbai Dist- Thane. I was very dear n lovely child in my Family because of my smiling face n cheerful nature but some people used to get angry due to My laughing habit. as I grew up I always thought of people who were in pain n sorrow and Poor. I feel very bad when I see someone begging. After completing my secondary education I felt that something is Missing in my life but I couldn't find any answer. When I was in college my thoughts changed. I thought that Money is solution for everything. So I started doing part time job but after earning money I understood that Icannot change anyone's life I can only provide amenities such as food cloth and shelter. But life is something different and beyond this which is Missing. And one day with my friend I went to a spiritual exhibition near our society. I was impressed by the Knowledge and that which attracted me the Most was Meditation and I started learning Meditation. For some days slowly and automaticaly I started following the Principles of Brahmakumaris such as pure food, regular Practice of Meditation and also social service (sewa). By following this I was very Happy and satisfied so I got a Mission - Transformation. Yes, everyone needs transformation. Then I joined Brahmakumaris Mission. For the past 28 years I m doing free service in this Mission. Brahmakumaris has many sister concern Branches and Radio Madhuban 90.4fm is also one of them. My dream is to Transform the Masses and bring a smile on every face and this Radio is a Good platform for me so I joint this and started being in touch with the community for their Transformation."
  finalQuotes2 = "I m Radio Jockey in Radio Madhuban 90.4 FM since 2011 an am feeling very satisfied with my life."
}
