document.addEventListener("DOMContentLoaded", () => {
  // Lights turning on effect
  const turnOnButton = document.getElementById("turn_on");

  turnOnButton.addEventListener("click", () => {
    let index = 0;
    document.querySelectorAll(".bulb").forEach((bulb) => {
      setTimeout(() => {
        bulb.classList.add("active");
      }, 300 * index);
      index++;
    });

    document.querySelector("body").classList.add("lit-body");

    console.log("Lights turned on!");

    setTimeout(() => {
      turnOnButton.classList.add("hide-btn");
      setTimeout(() => {
        turnOnButton.classList.add("hide");
      }, 2000);
    }, 2000);

    setTimeout(() => {
      playButton.classList.remove("hide");
    }, 4000);
  });

  // Play music
  const playButton = document.getElementById("play");
  playButton.addEventListener("click", () => {
    const audio = document.querySelector(".song");
    if (audio) {
      audio.play();

      setTimeout(() => {
        playButton.classList.add("hide-btn");
        setTimeout(() => {
          playButton.classList.add("hide");
        }, 2000);
      }, 2000);

      setTimeout(() => {
        bannerButton.classList.remove("hide");
      }, 4000);

      console.log("Music is playing!");
    }
  });

  // Show banner
  const bannerButton = document.getElementById("bannar_coming");
  bannerButton.addEventListener("click", () => {
    const banner = document.querySelector(".bannar");
    if (banner) {
      banner.classList.add("visible");

      setTimeout(() => {
        bannerButton.classList.add("hide-btn");
        setTimeout(() => {
          bannerButton.classList.add("hide");
        }, 2000);
      }, 2000);

      setTimeout(() => {
        balloonsButton.classList.remove("hide");
      }, 4000);

      console.log("Banner is visible!");
    }
  });

  // Balloons flying effect
  const balloonsButton = document.getElementById("balloons_flying");
  balloonsButton.addEventListener("click", () => {
    document.querySelector(".balloon-border").classList.add("fly");

    setTimeout(() => {
      document.querySelector(".balloons-container").classList.add("fly");
    }, 5000);

    setTimeout(() => {
      balloonsButton.classList.add("hide-btn");
      setTimeout(() => {
        balloonsButton.classList.add("hide");
      }, 2000);
    }, 8000);

    setTimeout(() => {
      cakeButton.classList.remove("hide");
    }, 13000);

    console.log("Balloons are flying!");
  });

  // Cake fade-in effect
  const cakeButton = document.getElementById("cake_fadein");
  cakeButton.addEventListener("click", () => {
    const cake = document.querySelector(".cake");
    if (cake) {
      cake.classList.add("fade-in");

      setTimeout(() => {
        cakeButton.classList.add("hide-btn");
        setTimeout(() => {
          cakeButton.classList.add("hide");
        }, 2000);
      }, 2000);

      setTimeout(() => {
        lightCandleButton.classList.remove("hide");
      }, 4000);

      console.log("Cake is appearing!");
    }
  });

  // Light candles
  const lightCandleButton = document.getElementById("light_candle");
  lightCandleButton.addEventListener("click", () => {
    document.querySelector(".candle").classList.add("fade-in");
    setTimeout(() => {
      document.querySelector(".flame").classList.add("fade-in");
    }, 2000);

    setTimeout(() => {
      lightCandleButton.classList.add("hide-btn");
      setTimeout(() => {
        lightCandleButton.classList.add("hide");
      }, 2000);
    }, 2000);

    setTimeout(() => {
      wishMessageButton.classList.remove("hide");
    }, 4000);

    console.log("Candles are lit!");
  });

  // Display wish message
  const wishMessageButton = document.getElementById("wish_message");
  wishMessageButton.addEventListener("click", () => {
    document.querySelector(".cake").classList.remove("fade-in");
    document.querySelector(".messages").classList.add("fade-in");
    const messages = document.querySelectorAll(".message");
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];

      setTimeout(() => {
        message.classList.add("fade-in");

        setTimeout(() => {
          message.classList.remove("fade-in");
          setTimeout(() => {
            message.classList.add("hide");
          }, 2000);
        }, 3000);
      }, 4000 * i);

      if (i === messages.length - 1) {
        setTimeout(() => {
          document.querySelector(".messages").classList.add("hide");
          document.querySelector(".cake").classList.add("fade-in");
          document.querySelector(".flame").classList.add("fade-in");
          document.querySelector(".candle").classList.add("fade-in");
        }, 4000 * (i + 1));
      }
    }
  });
});
