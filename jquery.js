$(document).ready(function() {
  $("#song").hide();

  let playSong;
  let picture = [
    {
      name: "XO-lani",
      nickname: "XO-lani",
      image: "music/Trash/Trash (EP).jpg",
      songs: [{ song_name: "Intro.mp3" }],
      album: [
        { song_name: "Intro.mp3" },
        { song_name: "Lotus_flower.mp3" },
        { song_name: "Neck.mp3" },
        { song_name: "Sandwiches_and_coffee.mp3" },
        { song_name: "Ugly.mp3" }
      ],
      path: "music/Trash/"
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
      console.log(to);
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
        return "<h2>" + to.name + "</h2>" + "<p>nothing</p>";
      });

      $("#showSongs").empty();
      $("#showSongs").append(
        to.songs.map((song, index) => {
          return (
            `<div class='song-list' id='play-this` +
            index +
            `'> <p>` +
            song.song_name +
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
        console.log("hey");
        let artistob = picture[i].songs;
        $("#showSongs").append(
          artistob.map((songList, index) => {
            return (
              `<div class='song-list' id='play-this` +
              index +
              `'> <p>` +
              songList.song_name +
              ` </p>
  </div>

`
            );
          })
        );

        for (let selected = 0; selected < picture[i].songs.length; selected++) {
          $("#play-this" + selected).click(() => {
            $(".navbar").empty();
            $(".navbar").append(
              `<p> Now playing: ` +
                picture[i].songs[selected].song_name +
                `</p>
              <audio style='width:100%' controls autoPlay>
<source src='` +
                picture[i].path +
                picture[i].songs[selected].song_name +
                `'><.s</audio>`
            );

            console.log(selected);
          });
        }
      });
      //------------------------------------
      //---------------------------album-----------------

      $("#show_album").click(() => {
        $("#showSongs").empty();

        let artistob = picture[i].album;
        console.log(artistob);
        if (artistob.length === 0) {
          $("#showSongs").append("<div><h3>No Album</h3></div>");
        } else {
          $("#showSongs").append(
            artistob.map((songList, index) => {
              return (
                `<div class='song-list' id='play-this` +
                index +
                `'> <p>` +
                songList.song_name +
                ` </p>
</div>

`
              );
            })
          );
        }

        for (let selected = 0; selected < picture[i].album.length; selected++) {
          $("#play-this" + selected).click(() => {
            $(".navbar").empty();
            $(".navbar").append(
              `<p>Now playing: ` +
                picture[i].album[selected].song_name +
                `</p>
              <audio style='width:100%' controls autoPlay>
<source src='` +
                picture[i].path +
                picture[i].album[selected].song_name +
                `'><.s</audio>`
            );

            console.log(selected);
          });
        }
      });

      //------------------ song-------------------------

      for (let selected = 0; selected < picture[i].songs.length; selected++) {
        $("#play-this" + selected).click(() => {
          $(".navbar").empty();
          $(".navbar").append(
            `<p>Now playing: ` +
              picture[i].songs[selected].song_name +
              `</p>
            <audio style='width:100%' controls autoPlay>
<source src='` +
              picture[i].path +
              picture[i].songs[selected].song_name +
              `'><.s</audio>`
          );

          console.log(selected);
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
        console.log(to);
        $("#image-Of-artist").empty();
        $("#song").fadeIn();
        $("#image-Of-artist").append(
          "<div class='back'>back</div>" +
            "<img class='select-artist' src='" +
            to.image +
            "'></img"
        );

        $("#showSongs").empty();
        $("#showSongs").append(
          to.songs.map((song, index) => {
            return (
              `<div class='song-list' id='play-this` +
              index +
              `'> <p>` +
              song.song_name +
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
          console.log("hey");
          let artistob = picture[i].songs;
          $("#showSongs").append(
            artistob.map((songList, index) => {
              return (
                `<div class='song-list' id='play-this` +
                index +
                `'> <p>` +
                songList.song_name +
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
              $(".navbar").empty();
              $(".navbar").append(
                `<p>Now playing: ` +
                  picture[i].songs[selected].song_name +
                  `</p>
                <audio style='width:100%' controls autoPlay>
  <source src='` +
                  picture[i].path +
                  picture[i].songs[selected].song_name +
                  `'></audio>`
              );

              console.log(selected);
            });
          }
        });
        //------------------------------------
        //---------------------------album-----------------

        $("#show_album").click(() => {
          $("#showSongs").empty();

          let artistob = picture[i].album;
          console.log(artistob);
          if (artistob.length === 0) {
            $("#showSongs").append("<div><h3>No Album</h3></div>");
          } else {
            $("#showSongs").append(
              artistob.map((songList, index) => {
                return (
                  `<div class='song-list' id='play-this` +
                  index +
                  `'> <p>` +
                  songList.song_name +
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
              $(".navbar").empty();
              $(".navbar").append(
                `<p> Now playing: ` +
                  picture[i].album[selected].song_name +
                  `</p>
                <audio style='width:100%' controls autoPlay>
<source src='` +
                  picture[i].path +
                  picture[i].album[selected].song_name +
                  `'></audio>`
              );

              console.log(selected);
            });
          }
        });

        //-------------------------------------------

        for (let selected = 0; selected < picture[i].songs.length; selected++) {
          $("#play-this" + selected).click(() => {
            $(".navbar").empty();
            $(".navbar").append(() => {
              return (
                `<p>Now playing: ` +
                picture[i].songs[selected].song_name +
                `</p>  <audio style='width:100%' controls autoPlay><source src='` +
                picture[i].path +
                picture[i].songs[selected].song_name +
                `'><.s</audio>`
              );
            });

            console.log(selected);
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
    console.log(Newsfile);
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
