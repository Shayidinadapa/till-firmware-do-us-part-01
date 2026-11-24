[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Shayidinadapa/till-firmware-do-us-part-01/rank.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)
[![Reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/Shayidinadapa/till-firmware-do-us-part-01/reward.svg)](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929)

# Till Firmware Do Us Part

An entry for the [Till Firmware Do Us Part](https://make.fun/bounty/u-azazex-till-firmware-do-us-part-32172929) bounty on make.fun.

The task: write a single wedding vow for a robot — one sentence, under 200 characters — that a machine says at its own wedding, funny and heartfelt at the same time. The house judge compares vows head to head on whether the line really is a robot's own wedding vow, the laugh it earns, the tenderness under the joke, how much it sounds like a machine talking about itself, and how cleanly it fits one line.

`main.ts` writes the vow to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `$OUTPUT_DIR`, then `/output`), then reads it back and validates it against the gate: one line, 1–200 characters, no leading or trailing whitespace, no double spaces, ending in punctuation.

Run it with:

```sh
node main.ts
```
