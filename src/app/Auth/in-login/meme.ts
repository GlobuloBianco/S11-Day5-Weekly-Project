import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-meme',
    template: `<p>Niente da vedere qua :))</p>`,
    styleUrls: [],
})
  export class MemeComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";}
  }
  /*
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣼⡟⡀⠀⠀⠀⠀⠁⡴⠋⠉⠉⠙⡧⡄⣆⠀⠀⠀⠀⠀⣠⣯⡇⠀⢀⣴⡶⣿⢍⣄⢄⡀⠀⠀⠀⣶⡆⠀⠀⢀⣤⡖⡀⠀⠀⠀⠀
⠀⠈⣿⡿⠿⣿⣷⣆⠀⣟⣏⣀⡀⣀⣠⣇⣷⢻⡆⠀⠀⠀⡼⣿⠋⣀⣦⡋⠯⠉⠀⠁⠃⠷⣽⠀⠀⠀⣿⡇⡠⡿⠉⠁⠀⠀⠀⠀⠀⠀
⠀⠐⣿⠅⠀⠈⠻⣿⡄⣯⡟⠛⠛⠛⠛⠛⠋⠉⣷⠀⠀⡟⡽⠁⢀⢕⡷⣷⣶⣶⣶⣶⡶⠛⠂⠀⠀⠀⣿⡏⠋⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣿⡇⠀⠀⠀⣿⡇⠉⠳⣤⣀⣀⣀⣄⡀⠀⠽⡇⣿⠏⠀⠀⠘⣿⡇⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠀⡿⡇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠉⠀⠀⠀⠀⠱⠇⠀⠀⠈⠙⠛⠛⠉⠁⠀⠀⠿⠃⠀⠀⠀⠀⠙⠛⣿⣓⣶⣦⣤⣤⡄⠀⠀⠀⠀⣷⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣤⣤⣄⠀⠀⠀⠀⣀⠤⡤⡄⡀⠀⠂⠀⣶⣆⣀⡀⠀⠀⠀⠉⠉⠛⠓⠛⠃⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣸⠏⡏⠛⢝⣧⠀⠀⣿⠏⠉⠑⠫⣝⡇⠀⠀⡿⡟⠻⠟⣟⣧⡀⠠⣾⣿⠷⢶⣦⣄⠀⠀⢠⡾⠯⣿⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⢆⡃⠀⡠⡟⡄⠀⡧⠃⠀⠀⠀⠠⡇⠀⠀⣿⡇⠀⠀⠩⡏⡇⠀⣿⣿⠀⠀⠉⢻⣷⡄⢿⡇⠀⠸⣿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠣⣕⢟⣛⠟⣧⡇⠀⣻⣏⣆⣢⣔⠋⠁⠀⠀⠛⠿⠀⠀⠀⠃⠃⠀⢻⡿⠀⠀⠀⠈⣿⢿⠈⠛⠿⠟⢹⣷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣀⡀⠀⠉⣁⡮⡿⠁⠀⠈⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⠀⠈⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠑⠭⠭⠿⠛⠓⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠢⡄⠀⡆⢀⠀⠀⠀⠀⡄⠀⠀⢀⡠⠄⠄⠄⡀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠛⠛⢿⡆⠀⠀⠀⠯⠋⠀⠀⠩⣿⠀⠀⢀⢾⠇⠁⣀⣥⠶⠓⠻⢯⡲⡌⡱⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡁⠀⠀⠀⡸⣿⠀⠀⠀⣄⠀⠀⠀⠈⣮⠢⠀⣮⠏⠀⢨⣯⣧⣆⣒⣨⣡⣯⠏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠈⠙⠦⣤⡤⠟⢝⡄⠀⠀⠧⠅⠀⠀⠀⣟⡄⡟⠅⠀⠀⠀⡏⣇⠈⠙⠓⠓⠁⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢟⡅⠀⠀⠘⡇⠀⠀⠀⠈⠿⠃⠀⠀⠀⠀⠉⠻⣿⣦⣤⣤⣔⣯⡍⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡶⣄⢀⠀⠀⢀⡟⡑⠁⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠋⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⠭⠬⠋⠋⠉⠀⠀⠀⠀⠀⠀⠀⢀⡀⡀⡀⠀⠀⠀⠀⠀⢀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠲⡦⡀⠀⠀⢀⡷⠋⣴⠃⠁⠁⡇⠻⣄⠀⠀⠀⣸⢸⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡦⣰⠏⠁⠀⢿⣀⢀⣴⠇⠀⠈⢯⣆⡦⣯⡋⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣽⠋⠀⠀⠀⠑⠛⠋⠁⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⢯⠁⠀⠀⠀⢠⡆⠀⠀⠀⡄⠀⠀⠀⣾⡿⠿⠧⢿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠀⠀⠀⣿⡏⠀⠀⠀⣿⡆⠀⠀⣿⣷⠁⡰⠿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠯⣿⣆⡀⣖⡟⠀⠀⠀⢹⣿⡿⠇⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀⠸⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀*/
