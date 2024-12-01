import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  
  articleUrl: string = ''; // Default URL
  summary: string = '';
  isLoading: boolean = false;
  error: string = '';

  private apiUrl = 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize';
  private apiKey = '08e09e8be1msh5885a2035e45dcap1d6510jsna80425b79c28'; // Replace with your API key

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.fetchSummary();
  }

  fetchSummary(): void {
    this.isLoading = true;
    this.error = '';
    this.summary = '';

    const headers = new HttpHeaders({
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com',
    });

    const params = new HttpParams()
      .set('url', this.articleUrl)
      .set('lang', 'en')
      .set('engine', '2');

    this.http
      .get(this.apiUrl, { headers, params })
      .subscribe(
        (response: any) => {
          this.summary = response.summary || 'No summary available';
          this.isLoading = false;
        },
        (error) => {
          this.error = 'Failed to fetch summary. Please try again.';
          console.error(error);
          this.isLoading = false;
        }
      );
  }

  public config: any = {
    height: 300,
    focus: false,
    disableResizeEditor: true,
    toolbar: [
      ['headline', ['style']],
      ['fontface', ['fontname']],
      ['textsize', ['fontsize']],
      ['height', ['height']],
      ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
      ['edit', ['undo', 'redo']],
      ['fontclr', ['color']],
      ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
      ['table', ['table']],
      ['insert', ['link', 'hr']],
      // ['view', ['fullscreen']],

    ],
  };

  clear(){
    this.articleUrl='';
    this.summary='';
  }
}
