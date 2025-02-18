import { Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';
import { NgxAudioPlayerModule } from '@le2xx/ngx-audio-player';

@Directive({
  selector: '[appVolumeControl]',
})
export class VolumeControlDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @Input() volumeSize: number = 0.1;

  ngAfterViewInit() {
    const audioElement = this.el.nativeElement as NgxAudioPlayerModule;

    if (audioElement) {
      this.renderer.setProperty(audioElement, 'volume', this.volumeSize);
    }
  }
}
