function Specifications({ changeMenu }) {
  return (
    <>
      <div className="custom-container">
        <h1 className="text-3xl font-medium py-4 px-2">Specifications</h1>
        <div className="accordion-group accordion-group-hover accordion-group-bordered">
          <div className="accordion">
            <input type="checkbox" id="toggle-1" className="accordion-toggle" />
            <label htmlFor="toggle-1" className="accordion-title">
              <span>CPU Specifications</span>
              <span className="text-sm text-content3 font-normal">
                Various detailed specifications about the CPU (Central
                Processing Unit) of the smartphone
              </span>
            </label>
            <div className="accordion-content text-content2">
              <div className="min-h-0">
                <span className="font-bold">1. Lightning-Fast Speeds:</span> The
                Astra P9 offers an octa-core CPU with a primary core clocked at
                2.92 GHz, delivering ultra-fast performance for both everyday
                tasks and intensive applications. Whether you're multitasking,
                streaming, or gaming, enjoy smooth and responsive performance
                without any lag.
                <br /> <br />
                <span className="font-bold">
                  2. Superior Gaming Experience:
                </span>{" "}
                With the Astra X9 GPU, the AstraPhone X offers stunning graphics
                and superior gaming performance. Experience console-quality
                gaming on the go, with high frame rates and exceptional visual
                fidelity.
                <br /> <br />
                <span className="font-bold">
                  3. Efficient Power Management:
                </span>{" "}
                Despite its powerful performance, the Astra P9 is designed to be
                energy efficient. The 5nm process technology ensures optimal
                power consumption, allowing you to enjoy prolonged usage without
                worrying about battery drain.
                <br /> <br />
                <span className="font-bold">4. Enhanced Connectivity:</span> The
                integrated Luna X5G modem provides lightning-fast 5G
                connectivity, ensuring you stay connected with ultra-fast
                download and upload speeds. Experience seamless video calls,
                high-speed browsing, and instant cloud access, no matter where
                you are.
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="toggle-2" className="accordion-toggle" />
            <label htmlFor="toggle-2" className="accordion-title">
              <span>NPU Specifications</span>
              <span className="text-sm text-content3 font-normal">
                Various detailed specifications about the NPU (Neural Processing
                Unit) of the smartphone
              </span>
            </label>
            <div className="accordion-content text-content2">
              <div className="min-h-0">
                <span className="font-bold">1. Enhanced AI Performance:</span>{" "}
                The dedicated NPU is designed specifically for AI tasks,
                providing up to 3 TOPS (Trillions of Operations Per Second) of
                processing power. This allows for real-time AI computations,
                enabling faster and more accurate processing of complex
                algorithms.
                <br /> <br />
                <span className="font-bold">
                  2. Intelligent Photography:
                </span>{" "}
                Capture stunning photos and videos with AI-powered enhancements.
                The NPU processes image data in real-time, offering features
                like scene recognition, optimal exposure settings, and advanced
                image stabilization. Every shot you take is optimized for the
                best possible quality.
                <br /> <br />
                <span className="font-bold">
                  3. Voice and Speech Recognition:
                </span>{" "}
                Experience more natural and responsive voice interactions. The
                NPU enhances voice recognition capabilities, making virtual
                assistants and voice commands more accurate and responsive.
                Enjoy seamless interactions with your device, whether you're
                making a call, setting a reminder, or searching the web.
                <br /> <br />
                <span className="font-bold">4. Advanced Security:</span> The NPU
                plays a crucial role in on-device security features. It enables
                real-time facial recognition and fingerprint scanning, ensuring
                that your data is protected with advanced biometric security
                measures. Your personal information stays secure and easily
                accessible only to you.
              </div>
            </div>
          </div>
          <div className="accordion">
            <input type="checkbox" id="toggle-3" className="accordion-toggle" />
            <label htmlFor="toggle-3" className="accordion-title">
              <span>Screen Specifications</span>
              <span className="text-sm text-content3 font-normal">
                Various detailed specifications about the smartphone's screen
                technology
              </span>
            </label>
            <div className="accordion-content text-content2">
              <div className="min-h-0">
                <span className="font-bold">1. Ultra High Resolution:</span>{" "}
                Experience breathtaking clarity with a 6.7-inch QHD+ OLED
                display. Boasting a resolution of 3200 x 1440 pixels, every
                image is rendered with stunning precision, offering an
                incredibly sharp and detailed viewing experience.
                <br /> <br />
                <span className="font-bold">
                  2. Vivid Colors and Deep Blacks:
                </span>{" "}
                The OLED technology delivers rich, vibrant colors and true
                blacks for unparalleled contrast. With a 10-bit color depth,
                enjoy over 1 billion colors that make every photo, video, and
                app look more lifelike than ever before.
                <br /> <br />
                <span className="font-bold">
                  3. Smooth and Responsive:
                </span>{" "}
                Enjoy fluid and seamless visuals with a 120Hz refresh rate.
                Whether you're scrolling through social media, playing
                high-speed games, or watching action-packed videos, the high
                refresh rate ensures smooth and stutter-free performance.
                <br /> <br />
                <span className="font-bold">4. HDR10+ Support:</span> The
                display supports HDR10+, enhancing dynamic range for brighter
                highlights and deeper shadows. Watch HDR content in its full
                glory with greater detail and realism, making your entertainment
                experience more immersive.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row py-2 px-2 gap-4 justify-center items-center">
          <button onClick={() => changeMenu(1)} className="custom-solid-button">
            Back
          </button>
          <button onClick={() => changeMenu(3)} className="custom-solid-button">
            pre-ordering
          </button>
        </div>
      </div>
    </>
  );
}

export default Specifications;
