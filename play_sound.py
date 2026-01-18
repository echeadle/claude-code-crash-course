import time
from pathlib import Path

import pygame


def play_sound(sound_file: str | Path) -> None:
    """Play a sound file using pygame mixer."""
    pygame.mixer.init()

    sound = pygame.mixer.Sound(sound_file)
    sound.play()

    # Wait for the sound to finish playing
    while pygame.mixer.get_busy():
        time.sleep(0.1)

    pygame.mixer.quit()


def main():
    # Get the path to the sound file relative to this script
    script_dir = Path(__file__).parent
    sound_file = script_dir / "ulala.wav"

    if not sound_file.exists():
        print(f"Error: Sound file not found: {sound_file}")
        return

    play_sound(sound_file)


if __name__ == "__main__":
    main()
