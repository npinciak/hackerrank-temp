import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})

export class TemperatureConverter implements OnInit {

  ngOnInit() {

    const celsiusInput = this.getByTestId('celsius-input');
    const fahrenheitInput = this.getByTestId('fahrenheit-input');

    celsiusInput.addEventListener('change', (event) => {
      const inputVal = (event.target as HTMLInputElement).value as unknown as number
      fahrenheitInput.value = this.convertF(inputVal)
    });

    fahrenheitInput.addEventListener('change', (event) => {
      const inputVal = (event.target as HTMLInputElement).value as unknown as number
      celsiusInput.value = this.convertC(inputVal)
    });
  }

  convertC = (F: number) => ((F - 32) * 5 / 9).toFixed(1)

  convertF = (C: number) => (C * 9 / 5 + 32).toFixed(1)

  getByTestId = (testId: string) => {
    return <HTMLInputElement>document.querySelector(`[data-test-id="${testId}"]`);
  };

}