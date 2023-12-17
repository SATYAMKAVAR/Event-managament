import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClientEventsService } from '../api-client-events.service';
import { FormControl, FormGroup } from '@angular/forms';

class event{
  _id:string="";
  title:String="";
  description:String="";
  date:String="";
  typeOfEvent:String="";
  maxMembers:Number=0;
  imageURL:String="";
}
@Component({
  selector: 'app-client-events',
  templateUrl: './client-events.component.html',
  styleUrl: './client-events.component.css',
})
export class ClientEventsComponent {
  
  events = [{_id:"",title:"",description:"",date:"",typeOfEvent:"",maxMembers:0,imageURL:""}]
  constructor(private _api:ApiClientEventsService, private _router:Router, private _activatedRoute:ActivatedRoute){}

  event1 = { 
    title : "Frolic 2023",
    description : "🚀 **TechFest [Your College Name] 2023: Unleashing Innovation and Creativity! 🌐🔧** Get ready to witness the convergence of technology, creativity, and innovation at the much-anticipated TechFest hosted by [Your College Name]. This year's event promises to be a dynamic celebration of cutting-edge advancements, thought-provoking discussions, and hands-on experiences that will redefine the boundaries of the technological landscape. 📅 **Date: [Specify Date]** 🕒 **Time: [Specify Time]** 📍 **Venue: [Location at Your College]** **Highlights of TechFest [Your College Name] 2023:** 1. **Tech Expo:** - Immerse yourself in a showcase of the latest technological marvels, prototypes, and innovations from both local and global tech enthusiasts. Explore interactive exhibits and witness the future unfold. 2. **Hackathon Extravaganza:** - Calling all coding maestros and problem-solving wizards! Engage in an intense 24-hour hackathon challenge that pushes the boundaries of your creativity and coding skills. Prizes await the most innovative solutions. 3. **Workshops and Tech Talks:** - Industry experts and seasoned professionals will share their insights and knowledge through engaging workshops and tech talks. From AI and blockchain to cybersecurity and the Internet of Things (IoT), dive deep into the hottest trends shaping the future. 4. **Robotics Showdown:** - Witness the clash of the titans as student-led robotics teams go head-to-head in a battle of wits and engineering prowess. Marvel at the creativity and precision of the robotic creations on display. 5. **Start-up Showcase:** - Explore the entrepreneurial spirit as emerging start-ups showcase their groundbreaking ideas. Connect with innovators, investors, and like-minded individuals to foster collaboration and future partnerships. 6. **Virtual Reality (VR) Experience Zone:** - Step into the immersive world of virtual reality! Experience the latest VR technologies and applications that are changing the way we perceive and interact with the digital realm. 7. **Networking Opportunities:** - Connect with industry professionals, alumni, and fellow students through networking sessions. Build valuable relationships that could shape your future career in the tech industry. 8. **Tech Quiz and Trivia:** - Put your tech knowledge to the test in our exciting quiz and trivia competitions. Prizes await those who prove their expertise in the world of bits and bytes. **Open to All:** TechFest [Your College Name] 2023 is open to students, tech enthusiasts, and anyone passionate about the world of technology. Whether you're a seasoned professional or a curious beginner, there's something for everyone! Mark your calendars and join us for a transformative journey into the realms of innovation and technology. TechFest [Your College Name] 2023 is where ideas flourish, creativity thrives, and the future unfolds. Be a part of the revolution! 🔗🚀",
    imageURL : "https://www.frolic.aswdc.in/img/FrolicTitle2023.png"
  }

  event2 = { 
    title : "Flutter Workshop 2023",
    description : "🚀 **TechFest [Your College Name] 2023: Unleashing Innovation and Creativity! 🌐🔧** Get ready to witness the convergence of technology, creativity, and innovation at the much-anticipated TechFest hosted by [Your College Name]. This year's event promises to be a dynamic celebration of cutting-edge advancements, thought-provoking discussions, and hands-on experiences that will redefine the boundaries of the technological landscape. 📅 **Date: [Specify Date]** 🕒 **Time: [Specify Time]** 📍 **Venue: [Location at Your College]** **Highlights of TechFest [Your College Name] 2023:** 1. **Tech Expo:** - Immerse yourself in a showcase of the latest technological marvels, prototypes, and innovations from both local and global tech enthusiasts. Explore interactive exhibits and witness the future unfold. 2. **Hackathon Extravaganza:** - Calling all coding maestros and problem-solving wizards! Engage in an intense 24-hour hackathon challenge that pushes the boundaries of your creativity and coding skills. Prizes await the most innovative solutions. 3. **Workshops and Tech Talks:** - Industry experts and seasoned professionals will share their insights and knowledge through engaging workshops and tech talks. From AI and blockchain to cybersecurity and the Internet of Things (IoT), dive deep into the hottest trends shaping the future. 4. **Robotics Showdown:** - Witness the clash of the titans as student-led robotics teams go head-to-head in a battle of wits and engineering prowess. Marvel at the creativity and precision of the robotic creations on display. 5. **Start-up Showcase:** - Explore the entrepreneurial spirit as emerging start-ups showcase their groundbreaking ideas. Connect with innovators, investors, and like-minded individuals to foster collaboration and future partnerships. 6. **Virtual Reality (VR) Experience Zone:** - Step into the immersive world of virtual reality! Experience the latest VR technologies and applications that are changing the way we perceive and interact with the digital realm. 7. **Networking Opportunities:** - Connect with industry professionals, alumni, and fellow students through networking sessions. Build valuable relationships that could shape your future career in the tech industry. 8. **Tech Quiz and Trivia:** - Put your tech knowledge to the test in our exciting quiz and trivia competitions. Prizes await those who prove their expertise in the world of bits and bytes. **Open to All:** TechFest [Your College Name] 2023 is open to students, tech enthusiasts, and anyone passionate about the world of technology. Whether you're a seasoned professional or a curious beginner, there's something for everyone! Mark your calendars and join us for a transformative journey into the realms of innovation and technology. TechFest [Your College Name] 2023 is where ideas flourish, creativity thrives, and the future unfolds. Be a part of the revolution! 🔗🚀",
    imageURL : "https://th.bing.com/th/id/R.d7e789c3b8bcb2b7880dd3b4b1d3edd6?rik=ytog4A4XipK5yA&riu=http%3a%2f%2ftechnobrains.io%2fwp-content%2fuploads%2f2021%2f07%2fflutter-Featured-Blog-Image2.jpg&ehk=qNtlUWmyUkVCjiGvmi7dbdWp32XXAQM3qbdnfOtyuBw%3d&risl=&pid=ImgRaw&r=0"
  }

  event3 = { 
    title : "Sprint 2023",
    description : "🚀 **TechFest [Your College Name] 2023: Unleashing Innovation and Creativity! 🌐🔧** Get ready to witness the convergence of technology, creativity, and innovation at the much-anticipated TechFest hosted by [Your College Name]. This year's event promises to be a dynamic celebration of cutting-edge advancements, thought-provoking discussions, and hands-on experiences that will redefine the boundaries of the technological landscape. 📅 **Date: [Specify Date]** 🕒 **Time: [Specify Time]** 📍 **Venue: [Location at Your College]** **Highlights of TechFest [Your College Name] 2023:** 1. **Tech Expo:** - Immerse yourself in a showcase of the latest technological marvels, prototypes, and innovations from both local and global tech enthusiasts. Explore interactive exhibits and witness the future unfold. 2. **Hackathon Extravaganza:** - Calling all coding maestros and problem-solving wizards! Engage in an intense 24-hour hackathon challenge that pushes the boundaries of your creativity and coding skills. Prizes await the most innovative solutions. 3. **Workshops and Tech Talks:** - Industry experts and seasoned professionals will share their insights and knowledge through engaging workshops and tech talks. From AI and blockchain to cybersecurity and the Internet of Things (IoT), dive deep into the hottest trends shaping the future. 4. **Robotics Showdown:** - Witness the clash of the titans as student-led robotics teams go head-to-head in a battle of wits and engineering prowess. Marvel at the creativity and precision of the robotic creations on display. 5. **Start-up Showcase:** - Explore the entrepreneurial spirit as emerging start-ups showcase their groundbreaking ideas. Connect with innovators, investors, and like-minded individuals to foster collaboration and future partnerships. 6. **Virtual Reality (VR) Experience Zone:** - Step into the immersive world of virtual reality! Experience the latest VR technologies and applications that are changing the way we perceive and interact with the digital realm. 7. **Networking Opportunities:** - Connect with industry professionals, alumni, and fellow students through networking sessions. Build valuable relationships that could shape your future career in the tech industry. 8. **Tech Quiz and Trivia:** - Put your tech knowledge to the test in our exciting quiz and trivia competitions. Prizes await those who prove their expertise in the world of bits and bytes. **Open to All:** TechFest [Your College Name] 2023 is open to students, tech enthusiasts, and anyone passionate about the world of technology. Whether you're a seasoned professional or a curious beginner, there's something for everyone! Mark your calendars and join us for a transformative journey into the realms of innovation and technology. TechFest [Your College Name] 2023 is where ideas flourish, creativity thrives, and the future unfolds. Be a part of the revolution! 🔗🚀",
    imageURL : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c117f676-862a-495d-b51d-eefe1a368326/d3djjmg-c44e865b-c0be-49a9-8a88-5f79e5c515ea.jpg/v1/fill/w_900,h_636,q_75,strp/college_event_poster_3_by_r3nder3d_d3djjmg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM2IiwicGF0aCI6IlwvZlwvYzExN2Y2NzYtODYyYS00OTVkLWI1MWQtZWVmZTFhMzY4MzI2XC9kM2Rqam1nLWM0NGU4NjViLWMwYmUtNDlhOS04YTg4LTVmNzllNWM1MTVlYS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.b48gDrwnaxV3523W94lk_IsW2d1aiAbmJCh3J4LqZ9A"
  }

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      console.log(res)
      this.events = res;
    });
  }

  eventById(id:any){
    this._router.navigate(['/',id]);
    console.log(id)
  }

  registerForm:FormGroup=new FormGroup({
    
  });
  id:number=0;
  event=new event();

  setForRegister(id : any){
    this.id = id
    this._api.getById(id).subscribe((res:any)=>{
      this.event = res;
      console.log(this.event)
    });
  }

  register(){
    
  }
}
