import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'about-me';
  load = true;
  notLoad = false;

  toTrailhead() { 
    window.open('https://trailblazer.me/id/rbomfim', '_blank');
  } 

  toGithub() { 
    window.open('https://github.com/java2124', '_blank');
  } 

  toLinkedin() { 
    window.open('https://www.linkedin.com/in/rafaela-bomfim-de-jesus-1a1317177', '_blank');
  }

  aboutMe() { 
  }

  skills() { 
  }

  portfolio() { 
  }

  async ngOnInit() {
    setTimeout(() => 
    {
      this.load = false;
      this.notLoad = true;
    },
    1500);
  }
}
