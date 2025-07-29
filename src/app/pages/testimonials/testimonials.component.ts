import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Alice Johnson',
      message: 'Benadic is an incredibly talented developer. His attention to detail is unmatched.',
      role: 'Senior Developer, ABC Corp'
    },
    {
      name: 'David Kim',
      message: 'Working with Benadic was a breeze. He delivers on time and exceeds expectations.',
      role: 'Team Lead, XYZ Ltd'
    },
    {
      name: 'Sara Lee',
      message: 'His portfolio speaks for itself. Truly a rising star in the frontend space!',
      role: 'Product Manager, Innovatech'
    }
  ];

  currentIndex=0;
  next(){
    this.currentIndex=(this.currentIndex+1)%this.testimonials.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
