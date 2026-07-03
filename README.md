<!-- ───────────────  Hero  ─────────────── -->
<picture>
  <source media="(prefers-color-scheme: dark)"  srcset="https://raw.githubusercontent.com/hiibrarahmad/hiibrarahmad/output/assets/hero-banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/hiibrarahmad/hiibrarahmad/output/assets/hero-banner-light.svg">
  <img alt="Ibrar Ahmad — Biosensor & embedded engineer" src="https://raw.githubusercontent.com/hiibrarahmad/hiibrarahmad/output/assets/hero-banner-dark.svg" width="100%">
</picture>

I design the analog front-end, route the PCB, write the firmware, and bring it up on the bench. Most of my work sits at the boundary between **biosignal sensing** (EEG, ECG, PPG, EMG) and **embedded systems** — ARM Cortex MCUs, low-noise mixed-signal layout, BLE wearables, and the occasional Linux-class SOM carrier.

Based in **Islamabad, Pakistan**. Studying at **COMSATS University**. Available for biosensor hardware, medical-grade PCB design (SI-aware multi-layer), and firmware R&D.

📫 **hiibrarahmad@gmail.com** · [LinkedIn](https://www.linkedin.com/in/hiibrarahmad) · [Portfolio](https://hiibrarahmad.github.io) · [Fiverr](https://www.fiverr.com/hiibrar_ahmad)

---

## Selected work

### [DermScope REVIVE](https://github.com/hiibrarahmad/PRJ-2026-PCB-0005-DERMSCOPE-REVIVE.github.io) — handheld dermatoscope carrier PCB
Carrier board for the **INVENSOM-6UL** (NXP **i.MX 6ULL**) Linux SOM, designed for a clinical handheld dermatoscope by *Revive Medical Technology*. Routed in Altium with attention to the camera/display lanes, power sequencing, and form-factor constraints of the handheld enclosure.
<sub>**Stack:** Altium · i.MX 6ULL · Embedded Linux · multi-layer PCB</sub>

### [Smart Watch · Dual-Board](https://github.com/hiibrarahmad/PRJ-2026-PCB-0002-SMART_WATCH.github.io) — nRF5340 wearable with Qi charging
Two-board wearable: a main board around the **Nordic nRF5340** with IPS + e-Paper displays, **BLE 5.3**, IMU, **BME680** environmental, and **CCS811** air-quality sensors — plus a wireless charging board with **BQ51003** Qi receiver, **BQ25100** charger, and **MAX86150** PPG/ECG sensor for heart-rate + SpO₂.
<sub>**Stack:** Altium · nRF5340 · BLE 5.3 · MAX86150 · BQ51003 · Qi 1.2.4</sub>

### [Custom Arduino UNO V1](https://github.com/hiibrarahmad/PRJ-2026-PCB-0001-UNO-V1.github.io) — ATmega328P with USB-C
Pin-for-pin UNO-compatible board on 2-layer FR4. Modernized with **USB Type-C**, **CH340G** serial bridge, full shield compatibility, and through-hole headers for hobbyist rework. The board you reach for when you want UNO ergonomics without the legacy USB-B.
<sub>**Stack:** KiCad · ATmega328P · CH340G · USB-C</sub>

---

## Tech matrix

| | |
|---|---|
| **Hardware**  | Altium Designer · KiCad · LTspice · multi-layer PCB · SI/PI · DFM |
| **Silicon**   | STM32 · ESP32 · Nordic nRF52/53 · ATmega · i.MX 6ULL · ARM Cortex-M |
| **Sensing**   | EEG · ECG · EMG · PPG · IMU · BME680 · MAX86150 · low-noise AFE |
| **Firmware**  | C · C++ · Python · FreeRTOS · Zephyr · Embedded Linux · BLE 5.3 · OTA |
| **Bench**     | JTAG / SWD · oscilloscope · logic analyzer · power profiling |

---

## Contribution activity

<picture>
  <source media="(prefers-color-scheme: dark)"  srcset="https://raw.githubusercontent.com/hiibrarahmad/hiibrarahmad/output/profile-3d-contrib/profile-night-rainbow.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/hiibrarahmad/hiibrarahmad/output/profile-3d-contrib/profile-green.svg">
  <img alt="3D contribution graph" src="https://raw.githubusercontent.com/hiibrarahmad/hiibrarahmad/output/profile-3d-contrib/profile-night-rainbow.svg">
</picture>

---

## Recent activity

<!--START_SECTION:activity-->
- ⬆️ Pushed `1` commit to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) — *PB1 touch: maximize CH1 sensitivity for extreme detection* · _2h ago_
- ⬆️ Pushed `1` commit to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) — *PB1 touch: fix inverted veto logic, prevent LP sleep on false RAISING* · _7h ago_
- ⬆️ Pushed `2` commits to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) — *PB1 touch: calibration-free IIR-drift veto for PC3 reliability* · _7h ago_
- ⬆️ Pushed `1` commit to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) — *Fix PB1 touch: debounce RAISING so PC3 doesn't glitch HIGH* · _8h ago_
- ⬆️ Pushed `1` commit to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) — *Fix auto-sleep and PC3 initial state for PB1 touch feedback* · _2d ago_
- ⬆️ Pushed `1` commit to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) — *Remove debug UART changes — PB05 debug pin caused IC boot failure* · _2d ago_
- ⬆️ Pushed `1` commit to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) · _2d ago_
- ⬆️ Pushed `1` commit to `main` in [hiibrarahmad/JL701N_LUNIX](https://github.com/hiibrarahmad/JL701N_LUNIX) — *Revert chargestore enable — caused bootloop on BR28* · _2d ago_
<!--END_SECTION:activity-->

<sub>Refreshed hourly from the GitHub Events API.</sub>
