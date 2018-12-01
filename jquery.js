$(document).ready(function() {
  $("#song").hide();

  let playSong;
  let picture = [
    {
      name: "XO",
      nickname: "XO-lani",
      image: "music/xo/Trash/Trash (EP).jpg",
      songs: [{ song_name: "Missed_birthday_days.mp3" }],

      album: [
        { song_name: "Intro.mp3" },
        { song_name: "Lotus_flower.mp3" },
        { song_name: "Neck.mp3" },
        { song_name: "Sandwiches_and_coffee.mp3" },
        { song_name: "Ugly.mp3" }
      ],
      album_Song_name: [
        { songName: "Intro" },
        { songName: "Lotus flower" },
        { songName: "Neck.mp3" },
        { songName: "Sandwiches and coffee" },
        { songName: "Ugly" }
      ],
      nameOfSong: [{ songName: "Missed birthday days" }],
      song_path: "music/xo/",
      album_path: "music/xo/Trash/",

      Bio:
        "This Ep/album is absolutely terrible and that's what I was going for. After listing to this Ep/album(I don't know) you will appreciate the good sh*t, like that song you keep on skipping. I hope it causes you to pull a weird face."
    },
    {
      name: "Taydo",
      nickname: "Taydo",
      image: "music/tydo/tydo2.jpg",
      songs: [{ song_name: "Be_Brave.mp3" }],
      album: [],
      album_Song_name: [],
      nameOfSong: [{ songName: "Be Brave" }],

      song_path: "music/tydo/",
      album_path: "music/tydo/AlbumForTydo/",
      Bio: "I make music just for fun"
    }
  ];

  $("#it").click(() => {
    return (playSong = "12_2009.mp3");
  });

  //----------------render first
  $("#display").empty();
  $("#display").append("<div class='u'> </div>");
  $(".u").append(
    picture.map((u, index) => {
      return (
        ` <div id='` +
        index +
        `'class='artist-div'> 
      <p class='artist-name'>` +
        u.name +
        `</p>

    <img class='artist-image' src='` +
        u.image +
        `'>` +
        `</div>`
      );
    })
  );
  for (let i = 0; i < picture.length; i++) {
    $("#" + i).click(() => {
      let to = picture[i];
      let playSelected;

      $("#image-Of-artist").empty();
      $("#song").fadeIn();
      $("#image-Of-artist").append(
        "<div class='back'>back</div>" +
          "<img class='select-artist' src='" +
          to.image +
          "'></img>"
      );
      $("#description").empty();
      $("#description").append(() => {
        return "<h2>" + to.name + "</h2>" + "<p id='bio'> " + to.Bio + "</p>";
      });

      $("#showSongs").empty();
      $("#showSongs").append(
        to.nameOfSong.map((song, index) => {
          return (
            `<div class='song-list' id='play-this` +
            index +
            `'> <p>` +
            song.songName +
            ` </p>
          </div>
        
       `
          );
        })
      );
      $("#albumOrSongs").empty();
      $("#albumOrSongs").append(() => {
        return "<div id=show_songs class='a'>Show songs</div> <div id='show_album' class='a'> Albums</div>";
      });
      //-----------------------------songs---------------------

      $("#show_songs").click(() => {
        $("#showSongs").empty();

        let artistob = picture[i].nameOfSong;
        $("#showSongs").append(
          artistob.map((songList, index) => {
            return (
              `<div class='song-list' id='play-this` +
              index +
              `'> <p>` +
              songList.songName +
              ` </p>
  </div>

`
            );
          })
        );

        for (let selected = 0; selected < picture[i].songs.length; selected++) {
          $("#play-this" + selected).click(() => {
            $(".song-list").removeClass("ifSelected");
            $("#play-this" + selected).addClass("ifSelected");
            $(".navbar").empty();
            $(".navbar").append(
              `<p> Now playing: ` +
                picture[i].nameOfSong[selected].songName +
                `</p>
              <audio style='width:100%' controls autoPlay>
<source src='` +
                picture[i].song_path +
                picture[i].songs[selected].song_name +
                `'></audio>`
            );
          });
        }
      });
      //------------------------------------
      //---------------------------album-----------------

      $("#show_album").click(() => {
        $("#showSongs").empty();

        let artistob = picture[i].album_Song_name;

        if (artistob.length === 0) {
          $("#showSongs").append("<div><h3>No Album</h3></div>");
        } else {
          $("#showSongs").append(
            artistob.map((songList, index) => {
              return (
                `<div class='song-list' id='play-this` +
                index +
                `'> <p>` +
                songList.songName +
                ` </p>
</div>

`
              );
            })
          );
        }

        for (let selected = 0; selected < picture[i].album.length; selected++) {
          $("#play-this" + selected).click(() => {
            $(".song-list").removeClass("ifSelected");
            $("#play-this" + selected).addClass("ifSelected");
            $(".navbar").empty();
            $(".navbar").append(
              `<p>Now playing: ` +
                picture[i].album_Song_name[selected].songName +
                `</p>
              <audio style='width:100%' controls autoPlay>
<source src='` +
                picture[i].album_path +
                picture[i].album[selected].song_name +
                `'><.s</audio>`
            );
          });
        }
      });

      //------------------ song-------------------------

      for (let selected = 0; selected < picture[i].songs.length; selected++) {
        $("#play-this" + selected).click(() => {
          $(".song-list").removeClass("ifSelected");
          $("#play-this" + selected).addClass("ifSelected");
          $(".navbar").empty();
          $(".navbar").append(
            `<p>Now playing: ` +
              picture[i].nameOfSong[selected].songName +
              `</p>
            <audio style='width:100%' controls autoPlay>
<source src='` +
              picture[i].song_path +
              picture[i].songs[selected].song_name +
              `'><.s</audio>`
          );
        });
      }

      $(".back").click(() => {
        $("#song").fadeOut();
      });
    });
  }

  //----------------------------

  $("#Overview").click(() => {
    $("#display").empty();
    $("#display").append("<div class='u'> </div>");
    $(".u").append(
      picture.map((u, index) => {
        return (
          ` <div id='` +
          index +
          `'class='artist-div'> 
          <p class='artist-name'>` +
          u.name +
          `</p>

        <img class='artist-image' src='` +
          u.image +
          `'>` +
          `</div>`
        );
      })
    );
    for (let i = 0; i < picture.length; i++) {
      $("#" + i).click(() => {
        let to = picture[i];
        let playSelected;

        $("#image-Of-artist").empty();
        $("#song").fadeIn();
        $("#image-Of-artist").append(
          "<div class='back'>back</div>" +
            "<img class='select-artist' src='" +
            to.image +
            "'></img"
        );
        $("#description").empty();
        $("#description").append(() => {
          return "<h2>" + to.name + "</h2>" + "<p id='bio'> " + to.Bio + "</p>";
        });
        $("#showSongs").empty();
        $("#showSongs").append(
          to.nameOfSong.map((song, index) => {
            return (
              `<div class='song-list' id='play-this` +
              index +
              `'> <p>` +
              song.songName +
              ` </p>
              </div>
            
           `
            );
          })
        );
        $("#albumOrSongs").empty();
        $("#albumOrSongs").append(() => {
          return "<div id=show_songs class='a'>Show songs</div> <div id='show_album' class='a'> Albums</div>";
        });
        //-----------------------------songs---------------------

        $("#show_songs").click(() => {
          $("#showSongs").empty();

          let artistob = picture[i].nameOfSong;
          $("#showSongs").append(
            artistob.map((songList, index) => {
              return (
                `<div class='song-list' id='play-this` +
                index +
                `'> <p>` +
                songList.songName +
                ` </p>
      </div>
    
   `
              );
            })
          );

          for (
            let selected = 0;
            selected < picture[i].songs.length;
            selected++
          ) {
            $("#play-this" + selected).click(() => {
              $(".song-list").removeClass("ifSelected");
              $("#play-this" + selected).addClass("ifSelected");
              $(".navbar").empty();
              $(".navbar").append(
                `<p>Now playing: ` +
                  picture[i].nameOfSong[selected].songName +
                  `</p>
                <audio style='width:100%' controls autoPlay>
  <source src='` +
                  picture[i].song_path +
                  picture[i].songs[selected].song_name +
                  `'></audio>`
              );
            });
          }
        });
        //------------------------------------
        //---------------------------album-----------------

        $("#show_album").click(() => {
          $("#showSongs").empty();

          let artistob = picture[i].album_Song_name;

          if (artistob.length === 0) {
            $("#showSongs").append("<div><h3>No Album</h3></div>");
          } else {
            $("#showSongs").append(
              artistob.map((songList, index) => {
                return (
                  `<div class='song-list' id='play-this` +
                  index +
                  `'> <p>` +
                  songList.songName +
                  ` </p>
</div>

`
                );
              })
            );
          }

          for (
            let selected = 0;
            selected < picture[i].album.length;
            selected++
          ) {
            $("#play-this" + selected).click(() => {
              $(".song-list").removeClass("ifSelected");
              $("#play-this" + selected).addClass("ifSelected");
              $(".navbar").empty();
              $(".navbar").append(
                `<p> Now playing: ` +
                  picture[i].album_Song_name[selected].songName +
                  `</p>
                <audio style='width:100%' controls autoPlay>
<source src='` +
                  picture[i].album_path +
                  picture[i].album[selected].song_name +
                  `'></audio>`
              );
            });
          }
        });

        //-------------------------------------------

        for (let selected = 0; selected < picture[i].songs.length; selected++) {
          $("#play-this" + selected).click(() => {
            $(".song-list").removeClass("ifSelected");
            $("#play-this" + selected).addClass("ifSelected");
            $(".navbar").empty();
            $(".navbar").append(() => {
              return (
                `<p>Now playing: ` +
                picture[i].nameOfSong[selected].songName +
                `</p>  <audio style='width:100%' controls autoPlay><source src='` +
                picture[i].song_path +
                picture[i].songs[selected].song_name +
                `'><.s</audio>`
              );
            });
          });
        }

        $(".back").click(() => {
          $("#song").fadeOut();
        });
      });
    }
  });
  //------------------------------news button------

  $("#news").click(() => {
    $("#song").fadeOut();
    $("#display").empty();
    $("#display").append("<div class='news-button'/>");
    let isThereNews;

    if (Newsfile.news === "") {
      isThereNews = "No news yet";
    } else {
      isThereNews = Newsfile.news;
    }
    $(".news-button").append(
      "<div class='news-whats-new'><h1> whats New</h1><p>" +
        isThereNews +
        "</p></div>"
    );
  });

  //-----------------------news button---------------------------------
});
