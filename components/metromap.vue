<template>
  <div class="main">
    <div class="body">
      <div class="metro-app" ref="matroapp">
        <svg id="svgMap" :style="styleMap"  version="1.1" viewBox="0 0 1e3 1340" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs>
                  <linearGradient id="linearGradient2243">
                    <stop stop-color="#f2aba3" stop-opacity=".95294" offset="0"></stop>
                    <stop stop-color="#00c0ff" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient1987">
                    <stop stop-color="#a1a2a3" offset="0"></stop>
                    <stop stop-color="#b4d445" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2376">
                    <stop stop-color="#0078bf" offset="0"></stop>
                    <stop stop-color="#894e35" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6164">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient1803" x1="313.63" x2="317.38" y1="199.7" y2="197.55" gradientTransform="translate(13.002 7.4549)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4cb85e" offset="0"></stop>
                    <stop stop-color="#a1a2a3" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient1803-0" x1="313.91" x2="316.93" y1="198.68" y2="197.09" gradientTransform="translate(-648.02 -11.16)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a1a2a3" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient1803-0-1" x1="313.58" x2="317.21" y1="199.23" y2="197.74" gradientTransform="translate(-301.39 -574.32)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8e479b" offset="0"></stop>
                    <stop stop-color="#4cb85e" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6158" x1="305.71" x2="305.71" y1="369.81" y2="361.08" gradientTransform="matrix(1 0 0 .5 -4 177.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#f58231" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6429" x1="307.29" x2="326.43" y1="187.61" y2="176.26" gradientTransform="translate(1.5329 2.6551)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ee3124" offset="0"></stop>
                    <stop stop-color="#0078bf" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6437" x1="-9.163" x2="8.9364" y1="-339.2" y2="-349.51" gradientTransform="translate(1.5329 -2.6551)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a1a2a3" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6445" x1="-307.2" x2="-288.71" y1="199.56" y2="188.58" gradientTransform="translate(-3.0658)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0078bf" offset="0"></stop>
                    <stop stop-color="#a1a2a3" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6570" x1="-307.92" x2="-304.33" y1="194.52" y2="188.24" gradientTransform="translate(-3.0658)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0078bf" offset="0"></stop>
                    <stop stop-color="#00c0ff" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6578" x1="-307.01" x2="-302.88" y1="-175.48" y2="-180.96" gradientTransform="translate(-1.5329 -2.6551)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00c0ff" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6955" x1="305.59" x2="305.59" y1="377.92" y2="370" gradientTransform="matrix(1 0 0 .5 4 177.69)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient6164"></linearGradient>
                  <linearGradient id="linearGradient7172" x1="305.71" x2="305.71" y1="376.72" y2="369.81" gradientTransform="matrix(1 0 0 .5 4 177.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#4cb85e" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient7232" x1="305.71" x2="305.71" y1="377.14" y2="369.28" gradientTransform="matrix(1 0 0 .5 2.8284 174.86)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient1973" x1="305.69" x2="305.71" y1="381.12" y2="369.81" gradientTransform="matrix(1 0 0 .5 3.4641 179.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ee3124" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2128" x1="314.64" x2="319.34" y1="203.06" y2="200.47" gradientTransform="translate(13.002 7.4549)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f58231" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2130" x1="314.95" x2="319.15" y1="202.35" y2="200.17" gradientTransform="translate(-648.02 -11.16)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ee3124" offset="0"></stop>
                    <stop stop-color="#b4d445" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2132" x1="315.62" x2="319.58" y1="202.6" y2="199.98" gradientTransform="translate(-301.39 -574.32)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#b4d445" offset="0"></stop>
                    <stop stop-color="#f58231" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2187" x1="305.71" x2="305.71" y1="376.79" y2="370.13" gradientTransform="matrix(1 0 0 .5 4 177.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a1a2a3" offset="0"></stop>
                    <stop stop-color="#894e35" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient1973-0" x1="305.71" x2="305.71" y1="376.88" y2="369.83" gradientTransform="matrix(1 0 0 .5 2 174.22)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient1987"></linearGradient>
                  <linearGradient id="linearGradient1973-8" x1="305.71" x2="305.71" y1="369.81" y2="363" gradientTransform="matrix(1 0 0 .5 0 173.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f58231" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient1978" x1="305.71" x2="305.71" y1="377.05" y2="370.13" gradientTransform="matrix(1 0 0 .5 4 177.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#f58231" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2085" x1="305.71" x2="305.71" y1="372.11" y2="366.08" gradientTransform="matrix(1.247 3.6351e-6 1.8175e-6 .62351 -72.689 133.06)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient6164"></linearGradient>
                  <linearGradient id="linearGradient2175" x1="305.71" x2="305.71" y1="369.81" y2="362.98" gradientTransform="matrix(1 0 0 .5 -2.8284 180.52)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#a1a2a3" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2237" x1="305.71" x2="305.71" y1="377.09" y2="370.21" gradientTransform="matrix(1 0 0 .5 2.8284 180.52)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient2243"></linearGradient>
                  <linearGradient id="linearGradient2861" x1="305.71" x2="305.71" y1="369.81" y2="361.6" gradientTransform="matrix(1 0 0 .5 -4 177.69)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient2243"></linearGradient>
                  <linearGradient id="linearGradient2175-9" x1="305.71" x2="305.71" y1="372.47" y2="367.03" gradientTransform="matrix(1.247 8.3402e-7 4.1701e-7 .62351 -78.345 130.97)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#dbf1f1" offset="0"></stop>
                    <stop stop-color="#a1a2a3" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2175-9-2" x1="303.16" x2="303.16" y1="368.66" y2="362.47" gradientTransform="matrix(1.1085 0 0 .55423 -30.328 161.25)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#dbf1f1" offset="0"></stop>
                    <stop stop-color="#4cb85e" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2151" x1="305.71" x2="305.71" y1="379" y2="373.77" gradientTransform="matrix(1 0 0 .62351 0 129.8)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#acbfe3" offset="0"></stop>
                    <stop stop-color="#a1a2a3" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2252" x1="305.71" x2="305.71" y1="374.67" y2="365.19" gradientTransform="matrix(1.2932 0 0 .63471 -85.636 125.93)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#acbfe3" offset="0"></stop>
                    <stop stop-color="#f58231" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2319" x1="305.63" x2="305.71" y1="376.59" y2="369.81" gradientTransform="matrix(1 0 0 .5 -2.8284 180.52)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0078bf" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2459" x1="305.71" x2="305.71" y1="372.53" y2="366.71" gradientTransform="matrix(1.2694 5.7229e-7 2.8614e-7 .63471 -79.54 123.1)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4cb85e" offset="0"></stop>
                    <stop stop-color="#b4d445" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2133" x1="313.62" x2="318.67" y1="199.19" y2="195.75" gradientTransform="translate(11.891 6.3444)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#b4d445" offset="0"></stop>
                    <stop stop-color="#0078bf" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2135" x1="315.31" x2="316.82" y1="199.86" y2="199.11" gradientTransform="translate(-646.51 -11.567)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient2376"></linearGradient>
                  <linearGradient id="linearGradient2137" x1="311.7" x2="317.27" y1="199.48" y2="197.33" gradientTransform="translate(-301.8 -572.8)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#b4d445" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2133-4" x1="313.77" x2="317.56" y1="199.2" y2="196.11" gradientTransform="translate(11.045 11.931)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ffcc32" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2135-5" x1="314.99" x2="316.59" y1="198.92" y2="197.98" gradientTransform="translate(-650.92 -15.093)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8e479b" offset="0"></stop>
                    <stop stop-color="#894e35" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2137-5" x1="312.31" x2="317.25" y1="199.88" y2="197.94" gradientTransform="translate(-296.54 -574.86)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2133-4-4" x1="313.7" x2="318.49" y1="199.93" y2="196.1" gradientTransform="translate(7.9671 10.819)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4cb85e" offset="0"></stop>
                    <stop stop-color="#f58231" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2135-5-2" x1="315.67" x2="317.36" y1="200.29" y2="199.59" gradientTransform="translate(-648.42 -17.202)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f58231" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2137-5-9" x1="311.98" x2="316.79" y1="199.29" y2="197.24" gradientTransform="translate(-295.96 -571.64)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ffcc32" offset="0"></stop>
                    <stop stop-color="#4cb85e" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2782" x1="305.71" x2="305.71" y1="377.94" y2="369.6" gradientTransform="matrix(1 0 0 .5 2.8284 174.86)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".95294" offset="0"></stop>
                    <stop stop-color="#f58231" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2471" x1="305.71" x2="305.71" y1="369.81" y2="358.09" gradientTransform="matrix(1 0 0 .5 0 173.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#b4d445" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2471-4" x1="305.71" x2="305.71" y1="376.52" y2="369.81" gradientTransform="matrix(1 0 0 .5 0 173.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#b4d445" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2320" x1="305.65" x2="305.71" y1="369.79" y2="363.25" gradientTransform="matrix(1 0 0 .5 -2.8284 174.86)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0078bf" offset="0"></stop>
                    <stop stop-color="#00c0ff" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2312" x1="305.71" x2="305.71" y1="377.05" y2="369.81" gradientTransform="matrix(1 0 0 .5 -4 177.69)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient1987"></linearGradient>
                  <linearGradient id="linearGradient2353" x1="305.71" x2="305.71" y1="376.73" y2="369.81" gradientTransform="matrix(1 0 0 .5 3.4641 179.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#a1a2a3" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689" x1="398.29" x2="401.25" y1="251.08" y2="248.12" gradientTransform="matrix(1.1892 0 0 1.1682 -74.93 -204.55)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a1a2a3" offset="0"></stop>
                    <stop stop-color="#0078bf" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-9" x1="398.29" x2="401.25" y1="251.08" y2="248.12" gradientTransform="matrix(0 -1 1 0 344.1 477.73)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f58231" offset="0"></stop>
                    <stop stop-color="#0078bf" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-8" x1="398.29" x2="401.25" y1="251.08" y2="248.12" gradientTransform="matrix(-.98243 0 0 -.98243 863.96 314.87)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#b4d445" offset="0"></stop>
                    <stop stop-color="#0078bf" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2353-9" x1="305.84" x2="305.78" y1="376.67" y2="370.19" gradientTransform="matrix(1 0 0 .5 0 181.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2976" x1="305.71" x2="305.71" y1="376.97" y2="369.81" gradientTransform="matrix(1 0 0 .5 -2.8284 180.52)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#4cb85e" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6" x1="374.9" x2="391.51" y1="256.64" y2="240.03" gradientTransform="matrix(.85303 .70711 -.85303 .70711 58.953 -346.76)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8e479b" offset="0"></stop>
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-0" x1="396.13" x2="397.2" y1="249.57" y2="244" gradientTransform="matrix(5.6126 .72625 -1.5921 .90976 -1653.6 -356.41)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3" x1="416.73" x2="421.55" y1="240.7" y2="259.27" gradientTransform="matrix(.8146 .79895 -.80136 .81215 114.34 -523.92)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4cb85e" offset="0"></stop>
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3-3" x1="368.19" x2="371.2" y1="260.32" y2="267.32" gradientTransform="matrix(1.3455 -.02855 .099707 1.183 81.329 -358.45)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f58231" offset="0"></stop>
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3-3-8" x1="342.31" x2="357.38" y1="290.56" y2="286.4" gradientTransform="matrix(1.1858 .21088 -.31774 .78701 413.48 -280.87)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3-3-8-5" x1="332.38" x2="345.86" y1="293.09" y2="289.48" gradientTransform="matrix(.22663 -.62511 .8458 .1675 479.98 282.59)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#0078bf" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3-3-8-5-3" x1="343.48" x2="352.32" y1="290.12" y2="287.75" gradientTransform="matrix(-1.8474 .087698 -3.0244 -3.5429 2339.7 1238.2)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3-3-8-5-3-3" x1="337.57" x2="348.22" y1="292.82" y2="289.37" gradientTransform="matrix(1.9532 -.73344 3.046 2.8526 -855.73 -37.8)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#b4d445" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3194" x1="305.71" x2="305.71" y1="377.42" y2="370.21" gradientTransform="matrix(1 0 0 .5 2.8284 174.86)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#79cdcd" offset="0"></stop>
                    <stop stop-color="#00c0ff" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3-3-8-5-3-3-9" x1="341.98" x2="355.13" y1="290.52" y2="287" gradientTransform="matrix(-.30316 -1.3756 2.2161 -1.7325 60.006 1565)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#4cb85e" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-3-3-8-5-3-3-9-0" x1="344.1" x2="349.12" y1="285.06" y2="285.18" gradientTransform="matrix(-.97977 1.0895 -3.0251 -1.4529 1417.4 539.92)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-0-6" x1="398.42" x2="400.57" y1="251.09" y2="249.2" gradientTransform="matrix(5.6733 -.88839 -1.5202 -3.3155 -1706.2 1349.4)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3339" x1="305.71" x2="305.71" y1="377.94" y2="369.6" gradientTransform="matrix(1 0 0 .5 3.4641 175.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".95294" offset="0"></stop>
                    <stop stop-color="#b4d445" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2249" x1="312.4" x2="318.26" y1="199.76" y2="196.4" gradientTransform="translate(9.2898 7.0936)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00c0ff" offset="0"></stop>
                    <stop stop-color="#0078bf" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2251" x1="312.36" x2="317.96" y1="199.71" y2="196.48" gradientTransform="translate(-645.85 -14.194)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient2376"></linearGradient>
                  <linearGradient id="linearGradient2253" x1="312.07" x2="318.19" y1="199.94" y2="196.63" gradientTransform="translate(-299.85 -570.92)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#894e35" offset="0"></stop>
                    <stop stop-color="#00c0ff" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6049-8" x1="305.67" x2="305.69" y1="384.9" y2="377.47" gradientTransform="matrix(1 0 0 .5 3.4641 194.12)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0078bf" offset="0"></stop>
                    <stop stop-color="#4cb85e" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient6049" x1="305.7" x2="305.71" y1="376.98" y2="369.81" gradientTransform="matrix(1 0 0 .5 3.4641 179.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4cb85e" offset="0"></stop>
                    <stop stop-color="#ee3124" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3586" x1="305.71" x2="305.71" y1="369.81" y2="363.86" gradientTransform="matrix(1 0 0 .5 4 177.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4cb85e" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3495-0" x1="305.71" x2="305.71" y1="368" y2="362.79" gradientTransform="matrix(0 1 -.5 0 343.29 -71.445)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".95294" offset="0"></stop>
                    <stop stop-color="#79cdcd" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3123" x1="305.71" x2="305.71" y1="368" y2="362.79" gradientTransform="matrix(0 1 -.5 0 343.29 -71.445)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".95294" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3259" x1="305.71" x2="305.71" y1="368" y2="358.55" gradientTransform="matrix(0 1 -.26358 0 252.06 -75.445)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8e479b" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3305" x1="305.71" x2="305.71" y1="368" y2="358.55" gradientTransform="matrix(0 1 -.26358 0 252.06 -75.445)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8e479b" offset="0"></stop>
                    <stop stop-color="#79cdcd" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient2689-6-0-6-1" x1="398.42" x2="400.57" y1="251.09" y2="249.2" gradientTransform="matrix(5.6733 -.88839 -1.5202 -3.3155 -1702.2 1349.4)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f2aba3" stop-opacity=".99216" offset="0"></stop>
                    <stop stop-color="#79cdcd" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3048" x1="305.71" x2="305.71" y1="368" y2="358.55" gradientTransform="matrix(0 1 -.26358 0 252.06 -67.445)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4cb85e" offset="0"></stop>
                    <stop stop-color="#79cdcd" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3163" x1="305.71" x2="305.71" y1="368.5" y2="363.86" gradientTransform="matrix(1 0 0 .5 4 177.69)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a1a2a3" offset="0"></stop>
                    <stop stop-color="#ffcc32" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient3201" x1="305.71" x2="305.71" y1="368" y2="362.31" gradientTransform="matrix(0 1 -.28513 0 260.34 -67.445)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#a1a2a3" offset="0"></stop>
                    <stop stop-color="#79cdcd" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient5588" x1="307.59" x2="307.59" y1="369.97" y2="366.59" gradientTransform="translate(-1.8774 -4)" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#de64a1" offset="0"></stop>
                    <stop stop-color="#8e479b" offset="1"></stop>
                  </linearGradient>
                  <linearGradient id="linearGradient5920" x1="302.21" x2="309.21" y1="364.38" y2="364.38" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#fff" offset="0"></stop>
                    <stop stop-color="#fff" stop-opacity="0" offset="1"></stop>
                  </linearGradient>
                </defs>
                <g id="m_layerLegend" transform="translate(0 217.48)">
                  <g fill="none" stroke-width="5">
                    <path d="m78.68 1007.5h34.749" stroke="#ee3124"></path>
                    <path d="m78.541 1042.7h34.749" stroke="#0078bf"></path>
                    <path d="m78.541 1060.3h34.749" stroke="#00c0ff"></path>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.75px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text transform="scale(.99999 1)" x="117.6056" y="1010.2746"  class="stylemap2" xml:space="preserve"><tspan x="117.6056" y="1010.2746" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Сокольническая линия</tspan></text>
                    <text transform="scale(.99999 1)" x="117.6056" y="1027.8705"  class="stylemap2" xml:space="preserve"><tspan x="117.6056" y="1027.8705" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Замоскворецкая линия</tspan></text>
                    <text transform="scale(.99999 1)" x="117.6056" y="1045.4663"  class="stylemap2" xml:space="preserve"><tspan x="117.6056" y="1045.4663" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Арбатско-Покровская линия</tspan></text>
                    <text transform="scale(.99999 1)" x="117.6056" y="1063.0623"  class="stylemap2" xml:space="preserve"><tspan x="117.6056" y="1063.0623" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Филёвская линия</tspan></text>
                  </g>
                  <g fill="none" stroke-width="5">
                    <path d="m78.541 1025.1h34.749"  stroke="#4cb85e"></path>
                    <path d="m279.42 1007.5h34.749"  stroke="#894e35"></path>
                    <path d="m279.28 1042.7h34.749"  stroke="#8e479b"></path>
                    <path d="m279.28 1060.3h34.749"  stroke="#ffcc32"></path>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.75px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text transform="scale(.99999 1)" x="318.34268" y="1010.2748"  class="stylemap2" xml:space="preserve"><tspan x="318.34268" y="1010.2748" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Кольцевая линия</tspan></text>
                    <text transform="scale(.99999 1)" x="318.34268" y="1027.8705"  class="stylemap2" xml:space="preserve"><tspan x="318.34268" y="1027.8705" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Калужско-Рижская линия</tspan></text>
                    <text transform="scale(.99999 1)" x="318.34268" y="1045.4663"  class="stylemap2" xml:space="preserve"><tspan x="318.34268" y="1045.4663" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Таганско-Краснопресненская линия</tspan></text>
                    <text transform="scale(.99999 1)" x="318.34268" y="1063.0623"  class="stylemap2" xml:space="preserve"><tspan x="318.34268" y="1063.0623" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Калининская линия</tspan></text>
                  </g>
                  <g fill="none" stroke-width="5">
                    <path d="m279.28 1025.1h34.749"  stroke="#f58231"></path>
                    <path d="m515.3 1007.5h34.749"  stroke="#ffcc32"></path>
                    <path d="m515.16 1042.7h34.749"  stroke="#b4d445"></path>
                    <path d="m746.19 1007.5h34.749"  stroke="#79cdcd"></path>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.75px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text transform="scale(.99999 1)" x="554.23334" y="1010.2745"  class="stylemap2" xml:space="preserve"><tspan x="554.23334" y="1010.2745" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Солнцевская линия</tspan></text>
                    <text transform="scale(.99999 1)" x="554.23334" y="1027.8704"  class="stylemap2" xml:space="preserve"><tspan x="554.23334" y="1027.8704" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Серпуховско-Тимирязевская линия</tspan></text>
                    <text transform="scale(.99999 1)" x="554.23334" y="1045.4662"  class="stylemap2" xml:space="preserve"><tspan x="554.23334" y="1045.4662" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Люблинская линия</tspan></text>
                    <text transform="scale(.99999 1)" x="785.25745" y="1010.2745"  class="stylemap2" xml:space="preserve"><tspan x="785.25745" y="1010.2745" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Каховская линия</tspan></text>
                  </g>
                  <g fill="none" stroke-width="5">
                    <path d="m515.16 1025.1h34.749"  stroke="#a1a2a3"></path>
                    <path d="m746.67 1025.1h34.749"  stroke="#acbfe3"></path>
                    <path d="m746.53 1042.7h34.749"  stroke="#f2aba3" stroke-opacity=".95294"></path>
                  </g>
                  <g font-family="'Roboto Condensed'" font-size="10.75px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text transform="scale(.99999 1)" x="785.59711" y="1027.8704"  fill="#000000" class="stylemap2" xml:space="preserve"><tspan x="785.59711" y="1027.8704" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Бутовская линия</tspan></text>
                    <text transform="scale(.99999 1)" x="785.59711" y="1045.4662"  fill="#000000" class="stylemap2" xml:space="preserve"><tspan x="785.59711" y="1045.4662" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Московское Центральное Кольцо</tspan></text>
                    <text transform="scale(.99999 1)" x="499.87354" y="1099.6517"  fill="#999999" text-align="center" text-anchor="middle" class="stylemap2" xml:space="preserve"><tspan x="499.87354" y="1099.6517" fill="#999999" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" text-align="center" text-anchor="middle" class="stylemap2">Макет создан на основе официальной схемы московского метрополитена</tspan></text>
                  </g>
                  <g stroke-width="1.3309">
                    <g transform="matrix(.72592 0 0 .77777 -82.218 335.71)" >
                      <rect x="199.23" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#4cb85e" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-6-8-8" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">2</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 -82.06 353.31)" >
                      <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#0078bf" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-6" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">3</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 585.58 317.61)" >
                      <rect x="199.48" y="878.67" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#79cdcd" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-6-8-0-0-6-9" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="7.9852px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1.5 -1" fill="#ffffff" font-family="sans-serif" font-size="7.9852px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">11А</tspan></text>
                    </g>
                  </g>
                  <path d="m514.83 1060.3h34.749"  fill="none" stroke="#79cdcd" stroke-width="5"></path>
                  <text transform="scale(.99999 1)" x="553.89368" y="1063.062"  fill="#000000" font-family="'Roboto Condensed'" font-size="10.75px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px" class="stylemap2" xml:space="preserve"><tspan x="553.89368" y="1063.062" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Большая Кольцевая линия</tspan></text>
                  <g stroke-width="1.3309">
                    <g transform="matrix(.72592 0 0 .77777 118.68 370.91)" >
                      <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ffcc32" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-2" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">8</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 354.56 335.71)" >
                      <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#a1a2a3" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-5-8-8" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">9</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 354.27 353.31)" >
                      <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#b4d445" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-6-8-0-9" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">10</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 118.68 353.31)" >
                      <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#8e479b" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-6-5" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">7</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 118.62 335.95)" >
                      <rect x="199.09" y="877.71" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#f58231" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-5-8-4-9" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">6</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 585.63 335.71)" >
                      <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#acbfe3" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-6-8-0-3-3-7" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">12</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 354.45 317.85)" >
                      <rect x="199.17" y="878.36" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ffcc32" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-4-0" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="8.8724px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="8.8724px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">8А</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 354.43 371.16)" >
                      <rect x="199.2" y="877.69" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#79cdcd" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-6-8-0-9-1" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1.5" dy="0 0" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">11</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 585.63 353.31)" >
                      <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#f2aba3" fill-opacity=".95294" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-6-8-0-3-3-7-8" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">14</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 118.67 318.35)" >
                      <rect x="199.09" y="877.71" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#894e35" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-5-8-4-9-9" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">5</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 -82.061 371.14)" >
                      <rect x="199.02" y="877.72" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#00c0ff" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-64-0-0-7" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">4</tspan></text>
                    </g>
                    <g transform="matrix(.72592 0 0 .77777 -82.194 318.37)" >
                      <rect x="199.2" y="877.69" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ee3124" style="paint-order:fill"></rect>
                      <text id="m_lbl101-7-08-6-9-2-7-5-8-4-2-7" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">1</tspan></text>
                    </g>
                  </g>
                  <path d="m746.53 1060.3h34.749"  fill="none" stroke="#de64a1" stroke-width="5"></path>
                  <g transform="matrix(.72592 0 0 .77777 585.63 370.91)"  stroke-width="1.3309">
                    <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#de64a1" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-3-3-7-8-1" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">15</tspan></text>
                  </g>
                  <text transform="scale(.99999 1)" x="785.59711" y="1063.0623"  fill="#000000" font-family="'Roboto Condensed'" font-size="10.75px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px" class="stylemap2" xml:space="preserve"><tspan x="785.59711" y="1063.0623" font-family="'Roboto Condensed'" font-size="10.75px" stroke-width=".26458" class="stylemap2">Некрасовская линия</tspan></text>
                </g>
                <g id="m_layerLineNumbers" transform="translate(0,100)" stroke-width="1.3309">
                  <g transform="matrix(.72592 0 0 .77777 629.04 260.17)" >
                    <text id="m_lbl101-7-08-6-1" transform="scale(.99999 1)" x="205.58037" y="889.93115"  fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".35212" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="205.58037" y="889.93115" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".35212" class="stylemap4">1</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 680.17 -593.09)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#0078bf" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">3</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 764.97 -261.53)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ffcc32" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">8</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 414.63 -178.9)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ffcc32" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-5" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">8</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 680.17 172.16)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#8e479b" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">7</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 637.41 297.42)" >
                    <rect x="199.23" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#4cb85e" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">2</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 540.75 270.89)" >
                    <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#b4d445" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">10</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 458.3 146.76)" >
                    <rect x="199.48" y="878.67" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#dbf1f1" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-0" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="7.9852px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1.5 -1" fill="#ffffff" font-family="sans-serif" font-size="7.9852px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">11А</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 273.94 166.13)" >
                    <rect x="199.48" y="878.67" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#dbf1f1" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-0-6" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="7.9852px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1.5 -1" fill="#ffffff" font-family="sans-serif" font-size="7.9852px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">11А</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 303.51 352.65)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#a1a2a3" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-5-8" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">9</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 177.72 279.65)" >
                    <rect x="199.09" y="877.71" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#f58231" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-5-8-4" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">6</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 177.49 297.42)" >
                    <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#acbfe3" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-3" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">12</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 33.039 358.79)" >
                    <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#acbfe3" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-3-3" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">12</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 52.261 298.91)" >
                    <rect x="199.2" y="877.69" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ee3124" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-5-8-4-2" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">1</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 607.67 -551.77)" >
                    <rect x="199.2" y="877.69" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ee3124" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-5-8-4-2-4" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">1</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 444.15 -742.91)" >
                    <rect x="199.09" y="877.71" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#f58231" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-5-8-4-3" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">6</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 332.71 -758.36)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#a1a2a3" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-5-8-7" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">9</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 220.93 -758.36)" >
                    <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#b4d445" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-95" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">10</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 109.57 -743.14)" >
                    <rect x="199.23" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#4cb85e" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-6" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">2</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 -1.7694 -695.98)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#8e479b" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-1" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">7</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 -113.26 -593.09)" >
                    <rect x="199.01" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#0078bf" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-64" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">3</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 -81.031 -384.77)" >
                    <rect x="199.02" y="877.72" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#00c0ff" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-64-0" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">4</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 -42.435 -290.19)" >
                    <rect x="199.02" y="877.72" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#00c0ff" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-64-0-0" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">4</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 -73.277 182.72)" >
                    <rect x="199.17" y="878.36" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ffcc32" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-4" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="8.8724px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="8.8724px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">8А</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 206.51 -531.92)" >
                    <rect x="199.17" y="878.36" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#ffcc32" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-4-8" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="8.8724px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" fill="#ffffff" font-family="sans-serif" font-size="8.8724px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">8А</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 27.583 -303.82)" >
                    <rect x="199.2" y="877.69" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#79cdcd" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-9-1-3" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1.5" dy="0 0" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">11</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 206.49 -503.4)" >
                    <rect x="199.2" y="877.69" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#79cdcd" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-9-1-3-2" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0 -1.5" dy="0 0" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">11</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 760.91 172.16)" >
                    <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#de64a1" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-3-3-7-8-1-5" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">15</tspan></text>
                  </g>
                  <g transform="matrix(.72592 0 0 .77777 661.88 49.306)" >
                    <rect x="199.42" y="878.01" width="17.908" height="16.715" rx="8.3573" ry="8.3573" fill="#de64a1" style="paint-order:fill"></rect>
                    <text id="m_lbl101-7-08-6-9-2-7-6-8-0-3-3-7-8-1-5-9" transform="scale(.99999 1)" x="207.97179" y="889.93115"  fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" letter-spacing="0px" stroke-width=".35212" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="207.97179" y="889.93115" dx="0" fill="#ffffff" font-family="sans-serif" font-size="10.667px" font-weight="bold" stroke-width=".35212" text-align="center" text-anchor="middle" class="stylemap4">15</tspan></text>
                  </g>
                </g>
                <g transform="translate(0,140)" display="none">
                  <g fill="none">
                    <path d="m397.52 89.934 5.3638-5.269" stroke="url(#linearGradient2689)" stroke-dashoffset="1.2" stroke-width="2"></path>
                    <path d="m596.19 80.443-4.5104-4.5104"  stroke="url(#linearGradient2689-9)" stroke-dashoffset="1.6" stroke-width="2"></path>
                    <path d="m473.66 67.214-4.4312 4.4311"  stroke="url(#linearGradient2689-8)" stroke-dashoffset="1.2" stroke-width="2"></path>
                  </g>
                  <path d="m410.86 73.841h191.35" fill="none" stroke="#0078bf" stroke-width="3"></path>
                  <g fill="#fff" stroke="#0078bf" stroke-width="1.5">
                    <circle transform="scale(-1)" cx="-404.78" cy="-82.674" r="2.75" display="inline"  style="paint-order:fill"></circle>
                    <circle transform="scale(-1)" cx="-467.58" cy="-73.841" r="2.75" display="inline"  style="paint-order:fill"></circle>
                    <circle transform="scale(-1)" cx="-589.89" cy="-73.841" r="2.75" display="inline"  style="paint-order:fill"></circle>
                    <circle transform="scale(-1)" cx="-500.35" cy="-73.841" r="2.75" display="inline"  style="paint-order:fill"></circle>
                    <circle transform="scale(-1)" cx="-543.94" cy="-73.841" r="2.75" display="inline"  style="paint-order:fill"></circle>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="8px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text x="497.63043" y="84.187737"  class="stylemap3" xml:space="preserve"><tspan x="497.63043" y="84.187737" font-family="'Roboto Condensed'" font-size="8px" stroke-width=".26458" class="stylemap4">Телецентр</tspan></text>
                    <text x="541.05182" y="84.388115"  class="stylemap2" xml:space="preserve"><tspan x="541.05182" y="84.388115" class="stylemap2">Ул. Академика</tspan><tspan x="541.05182" y="92.388115" class="stylemap2">Королёва</tspan></text>
                    <text x="463.74622" y="61.672752"  text-align="end" text-anchor="end" class="stylemap2" xml:space="preserve"><tspan x="463.74622" y="61.672752" text-align="end" class="stylemap2">Улица</tspan><tspan x="463.74622" y="69.672752" text-align="end" class="stylemap2">Милашенкова</tspan></text>
                    <text x="594.44287" y="60.56707"  text-align="end" text-anchor="end" class="stylemap2" xml:space="preserve"><tspan x="594.44287" y="60.56707" text-align="end" class="stylemap2">Выставочный</tspan><tspan x="594.44287" y="68.56707" text-align="end" class="stylemap2">центр</tspan></text>
                    <text x="613.00903" y="68.138573"  class="stylemap2" xml:space="preserve"><tspan x="613.00903" y="68.138573" class="stylemap2">Ул. Сергея</tspan><tspan x="613.00903" y="76.138573" class="stylemap2">Эйзенштейна</tspan></text>
                  </g>
                  <g stroke="#0078bf">
                    <path d="m608.29 67.758a6.0793 6.083 0 0 1-6.0793 6.083"  fill="none" stroke-width="3" style="paint-order:stroke markers fill"></path>
                    <circle transform="scale(-1)" cx="-608.29" cy="-65.008" r="2.75" display="inline"  fill="#fff" stroke-width="1.5" style="paint-order:fill"></circle>
                    <path d="m404.78 79.924a6.0793 6.083 0 0 1 6.0793-6.083"  fill="none" stroke-width="3" style="paint-order:stroke markers fill"></path>
                  </g>
                </g>
                <g fill="none" stroke="#de64a1" stroke-width="5">
                  <path id="m_p150102" d="m912.17 920.3v29.75" ></path>
                  <path id="m_p150304" d="m912.17 887.5v2.5m-13.233-15.726c7.3084 0 13.233 5.9214 13.233 13.226m-85.695-13.226c-7.3636 0-13.333-5.9662-13.333-13.326m13.333 13.326h72.462" ></path>
                  <path id="m_p150203" d="m912.17 885v40.307" ></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#f2aba3" stroke-dashoffset="1.6" stroke-opacity=".99216" stroke-width="5">
                  <path id="m_p140102" d="m215.03 61.915c7.829-9.8924 16.188-19.346 25.035-28.318" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140203" d="m240.06 33.597c22.165-22.48 47.39-41.936 74.999-57.692" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140304" d="m315.06-24.095c11.548-6.5903 23.512-12.533 35.844-17.78" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140405" d="m350.9-41.875c17.038-7.2488 34.779-13.168 53.091-17.627" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140506" d="m403.99-59.503c24.419-5.9467 49.855-9.2974 75.999-9.7433" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140607" d="m479.99-69.246c1.9982-0.03408 4.0004-0.05118 6.0067-0.05118 42.713 0 83.614 7.7536 121.37 21.93" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140708" d="m607.37-47.367c14.563 5.4676 28.66 11.891 42.212 19.193" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140809" d="m649.59-28.174c12.384 6.6726 24.314 14.079 35.732 22.162" style="paint-order:stroke fill markers"></path>
                  <path id="m_p140910" d="m685.32-6.0125c11.561 8.1837 22.597 17.06 33.047 26.569" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141011" d="m718.37 20.557c7.3802 6.7154 14.468 13.746 21.243 21.071" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141112" d="m739.61 41.628c24.597 26.595 45.063 57.066 60.379 90.395" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141213" d="m799.99 132.02c10.372 22.571 18.383 46.453 23.714 71.329" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141314" d="m823.7 203.35c2.2699 10.591 4.0541 21.363 5.3283 32.29" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141415" d="m829.03 235.64c1.5466 13.263 2.3417 26.755 2.3417 40.433 0 11.669-0.57869 23.202-1.7089 34.574" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141516" d="m829.66 310.65c-1.2313 12.388-3.1172 24.583-5.6225 36.551" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141617" d="m824.04 347.2c-2.5515 12.188-5.7455 24.14-9.545 35.819" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141718" d="m814.5 383.02c-15.704 48.272-41.753 91.876-75.529 128.2" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141819" d="m738.97 511.21c-15.494 16.662-32.615 31.79-51.109 45.133" style="paint-order:stroke fill markers"></path>
                  <path id="m_p141920" d="m687.86 556.35c-25.179 18.166-52.904 33.023-82.537 43.933" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142021" d="m605.32 600.28c-18.126 6.6732-36.966 11.87-56.374 15.444" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142122" d="m548.95 615.72c-20.41 3.7584-41.448 5.7224-62.945 5.7224-2.6308 0-5.2547-0.0294-7.8714-0.0879" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142223" d="m478.13 621.36c-33.131-0.74091-65.111-6.1473-95.308-15.588" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142324" d="m382.82 605.77c-23.444-7.3295-45.814-17.091-66.815-28.988" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142425" d="m316.01 576.78c-36.746-20.818-69.3-48.177-96.077-80.495" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142526" d="m219.93 496.29c-32.717-39.486-56.812-86.374-69.4-137.78" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142627" d="m150.53 358.51c-5.0464-20.607-8.2436-41.941-9.4056-63.814" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142728" d="m141.12 294.69c-0.3275-6.1649-0.49333-12.373-0.49333-18.619 0-14.074 0.84188-27.952 2.478-41.586" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142829" d="m143.11 234.49c3.0574-25.476 8.8882-50.099 17.182-73.559" style="paint-order:stroke fill markers"></path>
                  <path id="m_p142930" d="m160.29 160.93c2.111-5.9714 4.3816-11.867 6.8066-17.683" style="paint-order:stroke fill markers"></path>
                  <path id="m_p143031" d="m167.09 143.25c6.2166-14.908 13.448-29.287 21.608-43.051" style="paint-order:stroke fill markers"></path>
                  <path id="m_p143101" d="m188.7 100.2c7.9249-13.367 16.726-26.154 26.323-38.281" style="paint-order:stroke fill markers"></path>
                </g>
                <g transform="translate(0 218)" fill="none" stroke="#acbfe3">
                  <path id="m_p120102" d="m350.75 868.81h45.38"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p120607" d="m195.8 930.18h72.015" ></path>
                    <path id="m_p120203" d="m436.47 882.13v19.902m-45.346-33.228h32.072m-0.0589-1.3e-4c7.3636-2e-5 13.333 5.9662 13.333 13.326" ></path>
                    <path id="m_p120304" d="m396.84 930.18 26.302-6e-5m13.326-13.333c1e-5 7.3636-5.9662 13.333-13.326 13.333m13.326-17.148v3.8152" ></path>
                  </g>
                  <path id="m_p120405" d="m329.83 930.18h72.015"  stroke-width="5"></path>
                  <path id="m_p120506" d="m262.81 930.18h72.015"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#a1a2a3">
                  <path id="m_p91617" d="m416.12 104.96 51.974 51.974"  stroke-width="5"></path>
                  <path id="m_p92122" d="m470.88-84.837-23.688 23.803"  stroke-width="5"></path>
                  <path id="m_p91415" d="m384.09 290.5c-1e-5 -5.9824 2.3752-11.72 6.6031-15.95m35.714-35.714-35.714 35.714m-6.6031 15.95-0.0502 36.271"  stroke-width="5" style="paint-order:stroke markers fill"></path>
                  <path id="m_p90102" d="m454.47 881.98v30.534"  stroke-width="5"></path>
                  <path id="m_p90203" d="m454.47 847.68v39.3"  stroke-width="5"></path>
                  <path id="m_p90304" d="m454.47 824.09v28.581"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p90405" d="m454.47 800.51v28.581" ></path>
                    <path id="m_p90506" d="m454.47 776.93v28.581" ></path>
                    <path id="m_p90607" d="m454.47 751.18v30.751" ></path>
                    <path id="m_p90708" d="m454.47 689.41v61.876" ></path>
                    <path id="m_p90809" d="m454.47 665.82v28.581" ></path>
                    <path id="m_p90910" d="m454.47 642.24v28.581" ></path>
                  </g>
                  <path id="m_p91011" d="m454.47 543.57v103.68"  stroke-width="5"></path>
                  <path id="m_p91112" d="m454.47 490.71v57.858"  stroke-width="5"></path>
                  <path id="m_p91213" d="m454.47 434.75v54.733"  stroke-width="5"></path>
                  <path id="m_p91718" d="m376.88 65.717 39.242 39.242"  stroke-width="5"></path>
                  <path id="m_p92425" d="m483.68-174.95v35.442"  stroke-width="5"></path>
                  <path id="m_p91920" d="m370.27 25.329v11.215m0-11.215c-1e-5 -5.9824 2.3752-11.72 6.6031-15.95m18.306-18.306-18.306 18.306"  stroke-width="5"></path>
                  <path id="m_p91314" d="m454.47 424.75-1e-5 14.998m-6.6092-30.88c4.2302 4.2302 6.6076 9.9666 6.6092 15.947m-63.822-73.16 57.213 57.213m-57.213-57.213c-4.2302-4.2302-6.6076-9.9666-6.6092-15.947m0-9.1469v9.1469"  stroke-width="5"></path>
                  <path id="m_p91516" d="m468.09 156.93 10.301 10.304a13.9 13.893 45 0 1 5e-3 19.652m0.0708-0.0713-50.026 49.942"  stroke-width="5"></path>
                  <path id="m_p91819" d="m376.88 65.717 6.5355 6.5355m-13.145-40.709v18.226m6.6092 15.947c-4.2302-4.2302-6.6076-9.9666-6.6092-15.947"  stroke-width="5"></path>
                  <path id="m_p92021" d="m444.99-59.004-53.352 53.613"  stroke-width="5"></path>
                  <path id="m_p92223" d="m483.68-114.07v7.0592m-6.6031 15.95-6.1928 6.2231m12.796-22.173c1e-5 5.9824-2.3752 11.72-6.6031 15.95"  stroke-width="5"></path>
                  <path id="m_p92324" d="m483.68-144.51v35.442"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 218)" fill="none">
                  <path id="m_p110102" d="m441.49 738.03h78.236"  stroke="#dbf1f1" stroke-width="5"></path>
                  <path id="m_p110203" d="m514.73 738.03h48.779m15.944-6.6005 13.216-13.216m-13.216 13.216c-4.2279 4.2279-9.963 6.6022-15.944 6.6005"  stroke="#dbf1f1" stroke-width="5"></path>
                  <g stroke="#79cdcd">
                    <path id="m_p111112" d="m164.14 207.36-1e-5 26.388m1e-5 -26.388c0-4.9182 1.6675-8.9226 5.1475-12.4m25.166-25.168-25.166 25.168"  stroke-width="5"></path>
                    <path id="m_p111011" d="m164.14 233.75v33.094m6.6005 15.758 11.394 11.262m-11.394-11.262a22.287 22.551 88.678 0 1-6.6005-15.758"  stroke-width="5"></path>
                    <path id="m_p111213" d="m250.95 113.3-56.629 56.614"  stroke-width="5"></path>
                    <path id="m_p111314" d="m272.87 91.391-25.454 25.447"  stroke-width="5"></path>
                    <path id="m_p111415" d="m302.83 61.401-26.093 26.093m26.093-26.093c3.4777-3.4777 7.4883-5.1301 12.408-5.1285m68.177-2e-3 -68.177 2e-3"  stroke-width="5"></path>
                  </g>
                </g>
                <g transform="translate(0 218)" fill="none" stroke="#b4d445">
                  <path id="m_p101415" d="m497.03 164.88c-7.3636 1e-5 -13.333-5.9662-13.333-13.326m13.333 13.326 73.685 2e-5"  stroke-width="5" style="paint-order:stroke markers fill"></path>
                  <path id="m_p100102" d="m705.58 816.95v38.901"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p100203" d="m705.58 780.55v41.401" ></path>
                    <path id="m_p100304" d="m705.58 744.15v41.401" ></path>
                    <path id="m_p100405" d="m705.58 707.75v41.401" ></path>
                    <path id="m_p100506" d="m705.58 671.34v41.401" ></path>
                  </g>
                  <path id="m_p100607" d="m705.58 634.94v41.401"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p100708" d="m705.58 598.54v41.401" ></path>
                    <path id="m_p100809" d="m705.58 562.14v41.401" ></path>
                    <path id="m_p100910" d="m705.58 525.98v41.157" ></path>
                    <path id="m_p101011" d="m705.58 431.48-1e-5 94.507m1e-5 -94.507c0-5.9791 2.3765-11.713 6.6066-15.941m11.193-11.193-11.205 11.205" ></path>
                  </g>
                  <path id="m_p101112" d="m738.96 299.94 7.952 7.9552m6.6005 56.975c0 5.9791-2.3765 11.713-6.6066 15.941m6e-3 -72.916c4.2279 4.2279 6.6021 9.963 6.6005 15.944m0-2e-5v41.031m-6.6066 15.942-23.526 23.526"  stroke-width="5"></path>
                  <path id="m_p101213" d="m661.28 222.15 73.803 73.911"  stroke-width="5"></path>
                  <path id="m_p101314" d="m572.96 164.88 21.611 1e-5a22.544 22.556 0 0 1 15.941 6.6067m-2e-5 -1e-5 45.051 45.052"  stroke-width="5"></path>
                  <path id="m_p101516" d="m483.69 61.637-4e-5 85.932"  stroke-width="5"></path>
                  <path id="m_p101617" d="m483.68 31.044v35.592"  stroke-width="5"></path>
                  <path id="m_p101718" d="m483.68 0.45229 1e-5 35.592"  stroke-width="5"></path>
                  <path id="m_p102223" d="m372.19-170.47-2e-5 44.64"  stroke-width="5"></path>
                  <path id="m_p101920" d="m475.98-12.697-28.754-28.754"  stroke-width="5"></path>
                  <path id="m_p101819" d="m477.08-11.593-4.6398-4.6398m11.24 20.584v1.1011m-6.6005-17.045c4.2279 4.2279 6.6021 9.963 6.6005 15.944"  stroke-width="5"></path>
                  <path id="m_p102021" d="m446.14-42.533-33.322-33.322"  stroke-width="5"></path>
                  <path id="m_p102122" d="m372.19-130.83-1e-5 5.0015m40.631 49.976-34.031-34.031c-4.2279-4.2279-6.6021-9.963-6.6005-15.944"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#ffcc32">
                  <path id="m_p82223" d="m906.79 301.23-20.935-20.935"  stroke-width="5"></path>
                  <path id="m_p81617" d="m691.73 358.86-11.071 11.053c-4.2279 4.2279-9.963 6.6022-15.944 6.6005m-99.123-8e-5h99.181"  stroke-width="5"></path>
                  <path id="m_p80809" d="m77.806 525.69v-45.564"  stroke-width="5"></path>
                  <path id="m_p80910" d="m77.806 485.12v-32.939"  stroke-width="5"></path>
                  <path id="m_p81011" d="m77.806 457.18v-29.309"  stroke-width="5"></path>
                  <path id="m_p81718" d="m751.11 299.47-59.384 59.384"  stroke-width="5"></path>
                  <path id="m_p81819" d="m785.51 265.07-34.399 34.399"  stroke-width="5"></path>
                  <path id="m_p82122" d="m889.39 283.83-22.154-22.156"  stroke-width="5"></path>
                  <path id="m_p81920" d="m789.07 261.52c4.2279-4.2279 9.963-6.6022 15.944-6.6005m-15.944 6.6005-7.0912 7.0913"  stroke-width="5"></path>
                  <path id="m_p82021" d="m870.77 265.21-3.6821-3.6841m-15.941-6.6066c5.9791 0 11.713 2.3765 15.941 6.6066m-15.941-6.6066-41.864 2e-5"  stroke-width="5"></path>
                  <path id="m_p81150" d="m77.806 422.36v-11.731m-2e-6 9e-3a22.556 22.544 0 0 1 6.6066-15.941m74.731-84.355a22.556 22.544 0 0 1-6.6066 15.941m6.6066-15.941v-76.074m-75.422 161.12 68.816-69.105"  stroke-width="5"></path>
                  <path id="m_p85051" d="m159.14 234.27v-26.376m0-1e-5a22.556 22.544 0 0 1 6.6066-15.941m-9e-3 9e-3 25.913-25.913"  stroke-width="5"></path>
                  <path id="m_p85152" d="m191.65 166.05 55.762-55.762"  stroke-width="5"></path>
                  <path id="m_p85253" d="m243.88 113.82 25.449-25.449"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p80102" d="m77.806 743.4v-34.897" ></path>
                    <path id="m_p80203" d="m77.806 713.5v-34.897" ></path>
                    <path id="m_p80304" d="m77.806 683.6v-34.403" ></path>
                    <path id="m_p80405" d="m77.806 654.2v-35.002" ></path>
                  </g>
                  <g stroke-width="5">
                    <path id="m_p80506" d="m77.806 624.2v-34.897" ></path>
                    <path id="m_p80607" d="m77.806 594.3v-45.673" ></path>
                    <path id="m_p80708" d="m77.806 553.63v-32.939" ></path>
                  </g>
                  <path id="m_p85354" d="m273.19 84.509 26.118-26.118m1e-5 -7e-6c4.2279-4.2279 9.963-6.6022 15.944-6.6005m-0.0127 0 68.168-7e-6"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#8e479b">
                  <path id="m_p72223" d="m149.2-110.07v31.066" stroke-width="5"></path>
                  <path id="m_p70506" d="m831.14 500.61 1e-5 46.566"  stroke-width="5"></path>
                  <path id="m_p71011" d="m597.32 254.79 84.294 84.294"  stroke-width="5"></path>
                  <path id="m_p71718" d="m155.8 115.76 38.702 38.702m-38.702-38.702c-4.2279-4.2279-6.6022-9.963-6.6005-15.944"  stroke-width="5"></path>
                  <path id="m_p70102" d="m831.14 686.38v46.197"  stroke-width="5"></path>
                  <path id="m_p70203" d="m831.14 633.9v57.471"  stroke-width="5"></path>
                  <path id="m_p70304" d="m831.14 593.93v44.97"  stroke-width="5"></path>
                  <path id="m_p70405" d="m831.14 542.17v56.763"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p70708" d="m772.65 430.11 42.862 42.868" ></path>
                    <path id="m_p70809" d="m744.19 401.65 31.999 31.991" ></path>
                    <path id="m_p70910" d="m681.62 339.08 62.574 62.574" ></path>
                  </g>
                  <path id="m_p71112" d="m515.67 221.25 38.782-3e-5m15.941 6.6066 26.931 26.931m-42.872-33.537c5.9791 0 11.713 2.3765 15.941 6.6066"  stroke-width="5"></path>
                  <path id="m_p71213" d="m416.24 221.25 101.18 3e-5"  stroke-width="5" onclick=""></path>
                  <path id="m_p71314" d="m301.9 221.25h114.35"  stroke-width="5"></path>
                  <path id="m_p71516" d="m231.33 191.1 23.584 23.519"  stroke-width="5"></path>
                  <path id="m_p71617" d="m194.5 154.46 40.378 40.172"  stroke-width="5"></path>
                  <path id="m_p71819" d="m149.2 1.6934v98.12"  stroke-width="5"></path>
                  <path id="m_p71920" d="m149.2-26.872v33.566"  stroke-width="5" onclick=""></path>
                  <path id="m_p72021" d="m149.2-55.438v33.566"  stroke-width="5" onclick=""></path>
                  <path id="m_p72122" d="m149.2-84.004v33.566"  stroke-width="5" onclick=""></path>
                  <path id="m_p70607" d="m831.14 497.94v7.662m-6.6005-23.606c4.2279 4.2279 6.6022 9.963 6.6005 15.944m-19.157-28.5 12.556 12.556"  stroke-width="5"></path>
                  <path id="m_p71415" d="m251.38 211.09 3.5355 3.5355m15.941 6.6066a22.544 22.556 0 0 1-15.941-6.6066m15.941 6.6066 31.014 0.0375"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#f58231">
                  <g stroke-width="5">
                    <path id="m_p62324" d="m595.17-122.54v-32.186" onclick=""></path>
                    <path id="m_p61011" d="m328.92 564.03-2e-5 -63.268"></path>
                    <path id="m_p61415" d="m572.72 194.12-9.8422-10.039m9.8422 10.039c4.2279 4.2279 6.6022 9.963 6.6005 15.944m-3e-5 46.22v-46.22" ></path>
                    <path id="m_p61718" d="m562.52 71.59 26.049-26.049" ></path>
                  </g>
                  <path id="m_p60203" d="m328.92 825.66-1e-5 -32.985"  stroke-width="5"></path>
                  <path id="m_p60304" d="m328.92 797.67-1e-5 -33.079"  stroke-width="5"></path>
                  <path id="m_p60405" d="m328.92 769.59-1e-5 -33.079"  stroke-width="5"></path>
                  <path id="m_p60506" d="m328.92 741.51-1e-5 -33.079"  stroke-width="5"></path>
                  <path id="m_p60607" d="m328.92 713.43-1e-5 -33.079"  stroke-width="5"></path>
                  <path id="m_p60708" d="m328.92 685.36-1e-5 -33.079"  stroke-width="5"></path>
                  <path id="m_p60809" d="m328.92 657.28-1e-5 -33.079"  stroke-width="5"></path>
                  <path id="m_p60910" d="m328.92 629.2-2e-5 -65.17"  stroke-width="5"></path>
                  <path id="m_p61213" d="m393.47 418.07c4.2302-4.2279 9.9675-6.6031 15.95-6.6031m-1e-5 0h91.554m15.95-6.6031c-4.2302 4.2279-9.9675 6.6031-15.95 6.6031m-141.12 40.217 33.613-33.613m123.45-13.206 42.721-42.705"  stroke-width="5"></path>
                  <path id="m_p61314" d="m580.03 332.43 2e-5 -76.935m-20.38 106.67 13.774-13.789m6.6066-15.941c0 5.9791-2.3765 11.713-6.6066 15.941"  stroke-width="5"></path>
                  <path id="m_p61516" d="m538.84 150.9v-31.545m24.814 65.702-18.213-18.213m1e-5 -1e-5c-4.2279-4.2279-6.6022-9.963-6.6005-15.944"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p61617" d="m545.45 88.659 17.069-17.069m-23.676 52.764v-19.753m0 1e-5c0-5.9791 2.3765-11.713 6.6066-15.941" ></path>
                    <path id="m_p62021" d="m595.17-14.421v-48.622"  onclick=""></path>
                    <path id="m_p62122" d="m595.17-67.043v-28.315"  onclick=""></path>
                  </g>
                  <path id="m_p62223" d="m595.17-90.358v-37.186"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p60102" d="m343.34 849.42-7.8192-7.8192a22.544 22.556 45 0 1-6.6005-15.944" ></path>
                    <path id="m_p61920" d="m595.17 17.98 2e-5 -37.401" ></path>
                    <path id="m_p61112" d="m328.92 505.76-2e-5 -13.804m0-4e-5c0-5.9791 2.3765-11.713 6.6066-15.941l24.336-24.336" ></path>
                    <path id="m_p61819" d="m585.03 49.076 3.5356-3.5355m6.6066-15.937 4e-5 -16.623m-4e-5 16.619c0 5.9791-2.3765 11.713-6.6066 15.941" ></path>
                  </g>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#894e35">
                  <path d="m691.61 336.89c-1e-5 111.29-90.265 201.5-201.61 201.5-111.35-2e-5 -201.61-90.216-201.61-201.5 3e-5 -111.29 90.265-201.5 201.61-201.5 111.35 3e-5 201.61 90.216 201.61 201.5z" display="none" stroke-width="5"></path>
                  <g stroke-dashoffset=".8" stroke-width="5">
                    <path id="m_p50405" d="m637.21 142.72c17.693 20.046 31.462 43.638 40.105 69.574" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50506" d="m677.32 212.29c6.6806 20.047 10.298 41.494 10.298 63.786 0 26.918-5.2751 52.603-14.848 76.079" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50607" d="m672.77 352.15c-16.137 39.574-44.487 72.87-80.367 95.206" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50708" d="m592.4 447.36c-30.883 19.224-67.344 30.329-106.4 30.329-6.3322 0-12.596-0.29192-18.779-0.86304" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50809" d="m467.22 476.83c-40.457-3.7369-77.45-19.427-107.41-43.505" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50910" d="m359.81 433.32c-17.733-14.249-33.004-31.436-45.076-50.822" style="paint-order:stroke fill markers"></path>
                    <path id="m_p51011" d="m314.73 382.5c-16.172-25.971-26.601-55.888-29.512-87.976" style="paint-order:stroke fill markers"></path>
                    <path id="m_p51112" d="m285.22 294.52c-0.5511-6.0755-0.83268-12.229-0.83268-18.448 0-14.505 1.5317-28.652 4.4422-42.288" style="paint-order:stroke fill markers"></path>
                    <path id="m_p51201" d="m288.83 233.79c5.3654-25.138 15.417-48.541 29.195-69.251" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50102" d="m318.02 164.54c23.538-35.377 57.954-62.894 98.473-77.775" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50203" d="m416.5 86.761c21.667-7.9571 45.078-12.301 69.504-12.301 27.05 0 52.856 5.327 76.425 14.989" style="paint-order:stroke fill markers"></path>
                    <path id="m_p50304" d="m562.43 89.449c28.9 11.847 54.438 30.212 74.786 53.266" style="paint-order:stroke fill markers"></path>
                  </g>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#00c0ff">
                  <path id="m_p41011" d="m50.431 192.45v20.568" stroke-width="5"></path>
                  <path id="m_p40412" d="m199.53 281.32h58.237" stroke-width="5"></path>
                  <path id="m_p40102" d="m365.02 286.13 40.765 40.645" stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p40203" d="m328.28 281.32h22.612m-0.0301-2e-5c5.9824 0 11.72 2.3752 15.95 6.6031" ></path>
                    <path id="m_p40304" d="m261.77 281.32h71.511" ></path>
                    <path id="m_p41213" d="m128.05 281.32h64.672" ></path>
                  </g>
                  <path id="m_p40405" d="m201.95 326.88 38.954-38.954m0-1e-5c4.2302-4.2279 9.9675-6.6031 15.95-6.6031"  stroke-width="5"></path>
                  <path id="m_p40506" d="m151.43 377.31 50.614-50.528"  stroke-width="5"></path>
                  <path id="m_p40607" d="m63.764 391.61h64.15m-64.15 0a13.333 13.326 0 0 1-13.333-13.326m93.433 6.7227a22.556 22.544 0 0 1-15.95 6.6031m15.95-6.603 7.5685-7.6231m-101-24.637v25.537"  stroke-width="5"></path>
                  <path id="m_p40708" d="m50.431 329.16v28.581"  stroke-width="5"></path>
                  <path id="m_p40809" d="m50.431 231.6v102.57"  stroke-width="5"></path>
                  <path id="m_p40910" d="m50.431 208.02v28.581"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#0078bf">
                  <path id="m_p31112" d="m265.71 307.94h67.577" stroke-width="5"></path>
                  <path id="m_p32122" d="m37.703-4.6784v25.707" stroke-width="5"></path>
                  <path id="m_p30203" d="m831.14 64.412-1e-5 -39.545" stroke-width="5"></path>
                  <path id="m_p30102" d="m831.14 29.867-1e-5 -34.545"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p30405" d="m766.24 139.35 32.962-32.182" ></path>
                    <path id="m_p30506" d="m742.77 162.82 27.011-26.997" ></path>
                    <path id="m_p30607" d="m718.18 187.39 28.121-28.106" ></path>
                    <path id="m_p30708" d="m677.15 227.66 44.575-43.81" ></path>
                  </g>
                  <path id="m_p30809" d="m504.29 307.94h83.241m15.929-6.6031c-4.2302 4.2279-9.9675 6.6031-15.95 6.6031m15.946-6.5996 73.69-73.679"  stroke-width="5"></path>
                  <path id="m_p30910" d="m420.79 307.94h80.917"  stroke-width="5"></path>
                  <path id="m_p31011" d="m328.28 307.94h88.415"  stroke-width="5"></path>
                  <path id="m_p31213" d="m157.29 403.03 88.535-88.488m-88.535 88.488c-4.2302 4.2279-9.9675 6.6031-15.95 6.6031m104.48-95.091c4.2302-4.2279 9.9675-6.6031 15.95-6.6031m-171.24 101.69h50.805"  stroke-width="5"></path>
                  <path id="m_p31314" d="m55.495 409.63 37.539-3e-5"  stroke-width="5"></path>
                  <path id="m_p31516" d="m37.703 144.56v24.134"  stroke-width="5"></path>
                  <path id="m_p31617" d="m37.703 118.86v30.707"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p31718" d="m37.703 93.149v30.707" ></path>
                    <path id="m_p31819" d="m37.703 67.442v30.707" ></path>
                    <path id="m_p31920" d="m37.703 41.735v30.707" ></path>
                    <path id="m_p32021" d="m37.703 16.028v30.707" ></path>
                    <path id="m_p31415" d="m27.45 193.8a22.556 22.544 0 0 1 6.6066-15.941m6.7264 231.78h19.712m-19.712-2e-5c-7.3636 2e-5 -13.333-5.9661-13.333-13.326m1e-6 -202.51v202.51" ></path>
                  </g>
                  <path id="m_p30304" d="m831.14 66.504-1e-5 -7.0915m-31.933 47.759 25.326-24.727m6.6066-15.941a22.556 22.544 0 0 1-6.6066 15.941"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#4cb85e">
                  <path id="m_p22324" d="m260.69-154.73v26.038" stroke-width="5"></path>
                  <path id="m_p20102" d="m774.54 869.33h-81.912"  stroke-width="5"></path>
                  <path id="m_p20203" d="m580.03 846.3v9.845m13.333 13.184c-7.3636 2e-5 -13.333-5.9661-13.333-13.326m112.6 13.326-99.266 2e-5"  stroke-width="5"></path>
                  <path id="m_p20304" d="m580.03 810.62v40.676"  stroke-width="5"></path>
                  <path id="m_p20405" d="m580.03 774.95v40.676"  stroke-width="5"></path>
                  <path id="m_p20506" d="m580.03 739.27v40.676"  stroke-width="5"></path>
                  <path id="m_p20607" d="m580.03 706.23v38.038"  stroke-width="5"></path>
                  <path id="m_p20708" d="m580.03 667.92v38.176"  stroke-width="5"></path>
                  <path id="m_p20809" d="m580.03 632.24v40.676"  stroke-width="5"></path>
                  <path id="m_p20910" d="m580.03 572.93v64.311"  stroke-width="5"></path>
                  <path id="m_p21011" d="m580.03 459.77v113.16"  stroke-width="5"></path>
                  <path id="m_p21112" d="m580.03 362.35v97.419"  stroke-width="5"></path>
                  <path id="m_p21213" d="m573.42 341.67c4.2302 4.2279 6.6066 9.9621 6.6066 15.941m-65.615-65.607c5.9807-2e-3 11.716 2.3727 15.944 6.6005m1.3e-4 7e-5 43.065 43.065m-78.275-49.666h19.266"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p21314" d="m406.73 235.96 49.402 49.444m15.944 6.6006 23.071-1e-5m-23.071 1e-5c-5.9807 2e-3 -11.716-2.3727-15.944-6.6005" ></path>
                    <path id="m_p21415" d="m346.04 175.28 60.688 60.678" ></path>
                    <path id="m_p21516" d="m319.76 149.04 29.813 29.775" ></path>
                  </g>
                  <path id="m_p21617" d="m274.96 104.25 48.028 48.022"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p21819" d="m260.69 23.005v35.386" ></path>
                    <path id="m_p21718" d="m267.3 96.583c-4.2302-4.2279-6.6066-9.9621-6.6066-15.941m6.6066 15.941 7.664 7.6639m-14.271-50.856v27.251" ></path>
                    <path id="m_p21920" d="m260.69-7.0056v35.011" ></path>
                    <path id="m_p22021" d="m260.69-81.618v74.612" ></path>
                  </g>
                  <path id="m_p22122" d="m260.69-76.618v-31.038"  stroke-width="5"></path>
                  <path id="m_p22223" d="m260.69-133.69v31.038"  stroke-width="5"></path>
                </g>
                <g transform="translate(0 217.48)" fill="none" stroke="#ee3124">
                  <path id="m_p10102" d="m203.36 743.4-1e-5 -33.919" stroke-width="5"></path>
                  <path id="m_p11011" d="m301.85 369.46 66.834-1.1e-4" stroke-width="5"></path>
                  <path id="m_p11213" d="m417.75 344.55 65.439-65.634"  stroke-width="5"></path>
                  <path id="m_p11112" d="m399.44 362.86 18.31-18.31m-54.065 24.913 19.882-1.7e-4m15.873-6.6029c-4.2302 4.2279-9.9675 6.6031-15.95 6.6031"  stroke-width="5"></path>
                  <path id="m_p10910" d="m267.98 376.07c4.2302-4.2279 9.9675-6.6031 15.95-6.6031l17.925-4e-5m-87.916 60.644 54.041-54.041"  stroke-width="5"></path>
                  <path id="m_p10203" d="m203.36 714.48-1e-5 -33.705"  stroke-width="5"></path>
                  <path id="m_p10304" d="m203.36 685.77-1e-5 -33.304"  stroke-width="5"></path>
                  <path id="m_p10405" d="m203.36 657.47-1e-5 -44.476"  stroke-width="5"></path>
                  <path id="m_p10506" d="m203.36 617.99-1e-5 -34.789"  stroke-width="5"></path>
                  <path id="m_p10607" d="m203.36 588.2-1e-5 -46.21"  stroke-width="5"></path>
                  <path id="m_p10708" d="m203.36 546.99-1e-5 -35.749"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p11314" d="m489 273.43 35.894-36.115" ></path>
                    <path id="m_p11415" d="m526.65 235.55 50.989-50.622" ></path>
                    <path id="m_p11516" d="m583.24 179.23 27.891-28.03" ></path>
                    <path id="m_p11617" d="m607.6 154.74 28.024-28.293" ></path>
                    <path id="m_p11718" d="m637.78 124.29 23.345-23.345" ></path>
                    <path id="m_p11819" d="m657.59 104.48 24.911-24.911" ></path>
                    <path id="m_p11920" d="m678.97 83.109 33.328-33.632" ></path>
                    <path id="m_p12021" d="m708.77 53.021 12.294-12.323" ></path>
                    <path id="m_p12122" d="m721.06 40.697 21.215-20.804" ></path>
                  </g>
                  <path id="m_p10809" d="m203.36 511.24-2e-5 -61.225m6.6066-15.941 7.5036-7.5036m-14.11 23.445c0-5.9791 2.3765-11.713 6.6066-15.941"  stroke-width="5"></path>
                  <g stroke-width="5">
                    <path id="m_p15301" d="m203.36 772.31-1e-5 -33.919" ></path>
                    <path id="m_p15253" d="m203.36 801.23-1e-5 -33.919" ></path>
                    <path id="m_p15152" d="m203.36 830.15-1e-5 -33.919" ></path>
                    <path id="m_p15051" d="m203.36 859.07-1e-5 -33.919" ></path>
                  </g>
                </g>
                <g transform="translate(0 217.48)">
                  <g transform="matrix(1.1417 .65918 -.65918 1.1417 182.71 -210.58)" >
                    <path id="m_t214_915" d="m330.85 201.65a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0" fill="none" stroke="url(#linearGradient1803)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                    <path id="m_t713_915" transform="rotate(240)" d="m-327.55 178.48a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="url(#linearGradient1803-0)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st915" transform="scale(-1)" cx="-330.85" cy="-201.65" r="4.1785"  fill="#fff" stroke="#a1a2a3" stroke-width="3.0341" style="paint-order:fill" onclick="sst(915)"></circle>
                    <path id="m_t214_713" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="url(#linearGradient1803-0-1)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st214" transform="scale(-1)" cx="-318.34" cy="-208.86" r="4.1785"  fill="#fff" stroke="#4cb85e" stroke-width="3.0341" style="paint-order:fill" onclick="sst(214)"></circle>
                    <path id="m_to214_915" d="m330.85 201.65a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st713" transform="scale(-1)" cx="-318.34" cy="-194.43" r="4.1785"  fill="#fff" stroke="#8e479b" stroke-width="3.0341" style="paint-order:fill" onclick="sst(713)"></circle>
                    <path id="m_to713_915" transform="rotate(240)" d="m-327.55 178.48a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                    <path id="m_to214_713" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                  </g>
                  <g transform="rotate(180 332.79 401.54)" >
                    <path id="m_t509_612" d="m305.71 351.38 1e-5 11.217-1e-5 7.2172"  fill="none" stroke="url(#linearGradient6158)" stroke-width="7"></path>
                    <circle id="m_st612" transform="scale(-1)" cx="-305.71" cy="-351.38" r="5.5"  fill="#fff" stroke="#f58231" stroke-width="4" style="paint-order:fill" onclick="sst(612)"></circle>
                    <circle id="m_st509" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(509)"></circle>
                    <path id="m_to509_612" d="m305.71 351.38v18.434" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="matrix(.65236 -1.1299 1.1299 .65236 9.706 565.92)"  stroke-width=".76645">
                    <g fill="none" stroke-width="5.3652">
                      <path id="m_t112_310" d="m327.19 171.25a16.668 16.668 0 0 1-8.3338 14.434 16.668 16.668 0 0 1-16.668 0"  stroke="url(#linearGradient6429)" style="paint-order:stroke markers fill"></path>
                      <path id="m_t112_914" transform="rotate(120)" d="m9.7176-354.55a16.668 16.668 0 0 1-8.3338 14.434 16.668 16.668 0 0 1-16.668 0"  stroke="url(#linearGradient6437)" style="paint-order:stroke markers fill"></path>
                      <path id="m_t112_401" transform="scale(-1)" d="m-302.19-185.69a16.668 16.668 0 0 1-8.3338 14.434"  stroke="url(#linearGradient6578)" style="paint-order:stroke markers fill"></path>
                    </g>
                    <circle id="m_st112" transform="scale(-1)" cx="-302.19" cy="-185.69" r="4.222"  fill="#fff" stroke="#ee3124" stroke-width="3.0658" style="paint-order:fill" onclick="sst(112)"></circle>
                    <path id="m_t310_914" transform="rotate(240)" d="m-286.91 183.3a16.668 16.668 0 0 1-8.3338 14.434 16.668 16.668 0 0 1-16.668 0"  fill="none" stroke="url(#linearGradient6445)" stroke-width="5.3652" style="paint-order:stroke markers fill"></path>
                    <path id="m_t310_401" transform="rotate(240)" d="m-303.58 183.3a16.668 16.668 0 0 1-8.3338 14.434"  fill="none" stroke="url(#linearGradient6570)" stroke-width="5.3652" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st310" transform="scale(-1)" cx="-327.19" cy="-171.26" r="4.222"  fill="#fff" stroke="#0078bf" stroke-width="3.0658" style="paint-order:fill" onclick="sst(310)"></circle>
                    <path id="m_to112_310" d="m327.19 171.26a16.668 16.668 0 0 1-8.3338 14.434 16.668 16.668 0 0 1-16.668 0"  fill="none" stroke="#fff" stroke-width="1.5329" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st914" transform="scale(-1)" cx="-302.19" cy="-156.82" r="4.222"  fill="#fff" stroke="#a1a2a3" stroke-width="3.0658" style="paint-order:fill" onclick="sst(914)"></circle>
                    <path id="m_to310_914" transform="rotate(240)" d="m-286.91 183.3a16.668 16.668 0 0 1-8.3338 14.434 16.668 16.668 0 0 1-16.668 0"  fill="none" stroke="#fff" stroke-width="1.5329" style="paint-order:stroke markers fill"></path>
                    <path id="m_to112_914" transform="rotate(120)" d="m9.7176-354.55a16.668 16.668 0 0 1-8.3338 14.434 16.668 16.668 0 0 1-16.668 0"  fill="none" stroke="#fff" stroke-width="1.5329" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st401" transform="scale(-1)" cx="-310.53" cy="-171.26" r="4.222"  fill="#fff" stroke="#00c0ff" stroke-width="3.0658" style="paint-order:fill" onclick="sst(401)"></circle>
                    <path id="m_to112_401" transform="scale(-1)" d="m-302.19-185.69a16.668 16.668 0 0 1-8.3338 14.434"  fill="none" stroke="#fff" stroke-width="1.5329" style="paint-order:stroke markers fill"></path>
                    <path id="m_to310_401" transform="rotate(240)" d="m-303.58 183.3a16.668 16.668 0 0 1-8.3338 14.434"  fill="none" stroke="#fff" stroke-width="1.5329" style="paint-order:stroke markers fill"></path>
                  </g>
                  <g transform="translate(332.07 -231.08)" >
                    <path id="m_t117_504" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient6955)" stroke-width="7"></path>
                    <circle id="m_st117" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#ee3124" stroke-width="4" style="paint-order:fill" onclick="sst(117)"></circle>
                    <circle id="m_st504" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(504)"></circle>
                    <path id="m_to117_504" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="translate(12.37 -208.01)" >
                    <path id="m_t216_501" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient7172)" stroke-width="7"></path>
                    <circle id="m_st216" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#4cb85e" stroke-width="4" style="paint-order:fill" onclick="sst(216)"></circle>
                    <circle id="m_st501" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(501)"></circle>
                    <path id="m_to216_501" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(45 465.53 283.25)" >
                    <path id="m_t512_714" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient7232)" stroke-width="7"></path>
                    <circle id="m_st714" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#8e479b" stroke-width="4" style="paint-order:fill" onclick="sst(714)"></circle>
                    <circle id="m_st512" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5126"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(512)"></circle>
                    <path id="m_to512_714" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="1.999"></path>
                  </g>
                  <g transform="rotate(-30 160.4 -103.47)" >
                    <path id="m_t114_712" d="m305.71 355.38v7.2172l-0.0434 11.312"  fill="none" stroke="url(#linearGradient1973)" stroke-width="7"></path>
                    <circle id="m_st712" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5087"  fill="#fff" stroke="#8e479b" stroke-width="4" style="paint-order:fill" onclick="sst(712)"></circle>
                    <circle id="m_st114" transform="scale(-1)" cx="-305.67" cy="-373.91" r="5.5087"  fill="#fff" stroke="#ee3124" stroke-width="4" style="paint-order:fill" onclick="sst(114)"></circle>
                    <path id="m_to114_712" d="m305.71 355.38v7.2172l-0.0434 11.312" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="matrix(1.1417 .65918 -.65918 1.1417 335.43 -266.43)" >
                    <path id="m_t115_615" d="m330.85 201.65a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0" fill="none" stroke="url(#linearGradient2128)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                    <path id="m_t115_1014" transform="rotate(240)" d="m-327.55 178.48a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="url(#linearGradient2130)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st115" transform="scale(-1)" cx="-330.85" cy="-201.65" r="4.1785"  fill="#fff" stroke="#ee3124" stroke-width="3.0341" style="paint-order:fill" onclick="sst(115)"></circle>
                    <path id="m_t615_1014" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="url(#linearGradient2132)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st615" transform="scale(-1)" cx="-318.34" cy="-208.86" r="4.1785"  fill="#fff" stroke="#f58231" stroke-width="3.0341" style="paint-order:fill" onclick="sst(615)"></circle>
                    <path id="m_to115_615" d="m330.85 201.65a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st1014" transform="scale(-1)" cx="-318.34" cy="-194.43" r="4.1785"  fill="#fff" stroke="#b4d445" stroke-width="3.0341" style="paint-order:fill" onclick="sst(1014)"></circle>
                    <path id="m_to115_1014" transform="rotate(240)" d="m-327.55 178.48a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                    <path id="m_to615_1014" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                  </g>
                  <g transform="translate(110.4 -268.42)" >
                    <path id="m_t502_917" d="m305.71 355.38v7.2172l1e-5 10.435"  fill="none" stroke="url(#linearGradient2187)" stroke-width="7"></path>
                    <circle id="m_st502" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(502)"></circle>
                    <circle id="m_st917" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(917)"></circle>
                    <path id="m_to502_917" d="m305.71 355.38 1e-5 10.435v7.2172" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(60 574.34 405.78)" >
                    <path id="m_t916_1015" d="m305.71 355.38v7.2172l-8e-3 10.778"  fill="none" stroke="url(#linearGradient1973-0)" stroke-width="7"></path>
                    <circle id="m_st1015" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5087"  fill="#fff" stroke="#b4d445" stroke-width="4" style="paint-order:fill" onclick="sst(1015)"></circle>
                    <circle id="m_st916" transform="scale(-1)" cx="-305.71" cy="-373.37" r="5.5087"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(916)"></circle>
                    <path id="m_to916_1015" d="m305.71 355.38v7.2172l-8e-3 10.778" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(90 500.03 449.81)" >
                    <path id="m_t614_711" d="m305.71 351.81 4e-5 10.783-1e-5 7.2172"  fill="none" stroke="url(#linearGradient1973-8)" stroke-width="7"></path>
                    <circle id="m_st711" transform="scale(-1)" cx="-305.71" cy="-351.81" r="5.5"  fill="#fff" stroke="#8e479b" stroke-width="4" style="paint-order:fill" onclick="sst(711)"></circle>
                    <circle id="m_st614" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5"  fill="#fff" stroke="#f58231" stroke-width="4" style="paint-order:fill" onclick="sst(614)"></circle>
                    <path id="m_to614_711" d="m305.71 351.81 3e-5 10.783v7.2172" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="translate(256.8 -283.79)" >
                    <path id="m_t503_617" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient1978)" stroke-width="7"></path>
                    <circle id="m_st617" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#f58231" stroke-width="4" style="paint-order:fill" onclick="sst(617)"></circle>
                    <circle id="m_st503" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(503)"></circle>
                    <path id="m_to503_617" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(-45 325.09 365.3)" >
                    <path id="m_t110_510" d="m305.71 351.81 3e-5 9 1e-5 9"  fill="none" stroke="url(#linearGradient2085)" stroke-width="7"></path>
                    <circle id="m_st110" transform="scale(-1)" cx="-305.71" cy="-351.81" r="5.5126"  fill="#fff" stroke="#ee3124" stroke-width="4" style="paint-order:fill" onclick="sst(110)"></circle>
                    <circle id="m_st510" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5126"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(510)"></circle>
                    <path id="m_to110_510" d="m305.71 351.81 2e-5 9 1e-5 9" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(225 408.62 389.81)" >
                    <path id="m_t508_912" d="m305.71 351.76 4e-5 10.836-1e-5 7.2172"  fill="none" stroke="url(#linearGradient2175)" stroke-width="7"></path>
                    <circle id="m_st912" transform="scale(-1)" cx="-305.71" cy="-351.76" r="5.5126"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(912)"></circle>
                    <circle id="m_st508" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5126"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(508)"></circle>
                    <path id="m_to508_912" d="m305.71 351.76 3e-5 10.836v7.2172" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(-45 127.49 532.81)" >
                    <path id="m_t413_1427" d="m305.71 355.38v7.2172l-1e-5 11.259"  fill="none" stroke="url(#linearGradient2237)" stroke-width="7"></path>
                    <circle id="m_st413" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#00c0ff" stroke-width="4" style="paint-order:fill" onclick="sst(413)"></circle>
                    <circle id="m_st1427" transform="scale(-1)" cx="-305.71" cy="-373.85" r="5.5126"  fill="#fff" stroke="#f2aba3" stroke-opacity=".95294" stroke-width="4" style="paint-order:fill" onclick="sst(1427)"></circle>
                    <path id="m_to413_1427" d="m305.71 355.38v18.476" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <path id="m_t717_1429" d="m160.5 160.63 31.159-9.0129"  fill="none" stroke="url(#linearGradient2689-6-0)" stroke-dasharray="2, 2" stroke-dashoffset="1" stroke-width="2"></path>
                  <g transform="rotate(180 228.57 364.19)" >
                    <path id="m_t406_1426" d="m305.71 351 1e-5 11.59-1e-5 7.2172"  fill="none" stroke="url(#linearGradient2861)" stroke-width="7"></path>
                    <circle id="m_st406" transform="scale(-1)" cx="-305.71" cy="-351" r="5.5"  fill="#fff" stroke="#00c0ff" stroke-width="4" style="paint-order:fill" onclick="sst(406)"></circle>
                    <circle id="m_st1426" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5"  fill="#fff" stroke="#f2aba3" stroke-opacity=".95294" stroke-width="4" style="paint-order:fill" onclick="sst(1426)"></circle>
                    <path id="m_to406_1426" d="m305.71 351v18.807" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(135 298.1 584.14)" >
                    <path id="m_t907_1101" d="m305.71 355.38 1e-5 9-1e-5 9"  fill="none" stroke="url(#linearGradient2175-9)" stroke-width="7"></path>
                    <circle id="m_st907" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(907)"></circle>
                    <circle id="m_st1101" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5126"  fill="#fff" stroke="#dbf1f1" stroke-width="4" style="paint-order:fill" onclick=""></circle>
                    <path id="m_to907_1101" d="m305.71 355.38 1e-5 9v9" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(-45 866.23 199.61)" >
                    <path id="m_t207_1103" d="m305.71 355.38v8l-1e-5 8"  fill="none" stroke="url(#linearGradient2175-9-2)" stroke-width="7"></path>
                    <circle id="m_st207" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#4cb85e" stroke-width="4" style="paint-order:fill" onclick="sst(207)"></circle>
                    <circle id="m_st1103" transform="scale(-1)" cx="-305.71" cy="-373.25" r="5.5126"  fill="#fff" stroke="#dbf1f1" stroke-width="4" style="paint-order:fill" onclick=""></circle>
                    <path id="m_to207_1103" d="m305.71 355.38v18.502" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(90 103.75 706.1)" >
                    <path id="m_t901_1203" d="m305.71 355.38v9l-1e-5 9"  fill="none" stroke="url(#linearGradient2151)" stroke-width="7"></path>
                    <circle id="m_st901" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(901)"></circle>
                    <circle id="m_st1203" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#acbfe3" stroke-width="4" style="paint-order:fill" onclick="sst(1203)"></circle>
                    <path id="m_to901_1203" d="m305.71 355.38v18" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="translate(39.532 499.52)" >
                    <path id="m_t601_1201" d="m305.71 351.49v9.1618l-1e-5 9.1618"  fill="none" stroke="url(#linearGradient2252)" stroke-width="7"></path>
                    <circle id="m_st601" transform="scale(-1)" cx="-305.71" cy="-351.81" r="5.5"  fill="#fff" stroke="#f58231" stroke-width="4" style="paint-order:fill" onclick="sst(601)"></circle>
                    <circle id="m_st1201" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5"  fill="#fff" stroke="#acbfe3" stroke-width="4" style="paint-order:fill" onclick="sst(1201)"></circle>
                    <path id="m_to601_1201" d="m305.71 351.49v18.324" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(225 205.63 436.07)" >
                    <g>
                      <path id="m_t313_811" d="m305.71 355.38v7.2172l-1e-5 10.783"  fill="none" stroke="url(#linearGradient2319)" stroke-width="7"></path>
                      <circle id="m_st811" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#ffcc32" stroke-width="4" style="paint-order:fill" onclick="sst(811)"></circle>
                      <circle id="m_st313" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5126"  fill="#fff" stroke="#0078bf" stroke-width="4" style="paint-order:fill" onclick="sst(313)"></circle>
                      <path id="m_to313_811" d="m305.71 355.38v18" fill="none" stroke="#fff" stroke-width="2"></path>
                    </g>
                    <circle id="m_stx313" transform="rotate(135)" cx="47.845" cy="-480.19" r="1.5"  fill="#ffcc32" style="paint-order:stroke markers fill"></circle>
                    <circle id="m_stx811" transform="rotate(135)" cx="35.117" cy="-467.46" r="1.5"  fill="#0078bf" style="paint-order:stroke markers fill"></circle>
                  </g>
                  <g transform="rotate(45 -103.8 1086.6)" >
                    <path id="m_t202_1001" d="m305.71 351.49 1e-5 9.1618-1e-5 9.1618"  fill="none" stroke="url(#linearGradient2459)" stroke-width="7"></path>
                    <circle id="m_st1001" transform="scale(-1)" cx="-305.71" cy="-351.49" r="5.5126"  fill="#fff" stroke="#b4d445" stroke-width="4" style="paint-order:fill" onclick="sst(1001)"></circle>
                    <circle id="m_st202" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5126"  fill="#fff" stroke="#4cb85e" stroke-width="4" style="paint-order:fill" onclick="sst(202)"></circle>
                    <path id="m_to202_1001" d="m305.71 351.49-1e-5 9.1618v9.1618" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g stroke-width=".75852">
                    <g transform="matrix(.65918 1.1417 -1.1417 .65918 687.01 -281.25)" >
                      <path id="m_t308_1013" d="m330.56 199.49a8.3338 8.3338 0 0 1-2.9765 8.7686 8.3338 8.3338 0 0 1-9.2402 0.60563" fill="none" stroke="url(#linearGradient2133)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                      <path id="m_t308_505" transform="rotate(240)" d="m-327.84 180.64a8.3338 8.3338 0 0 1-10.207 5.8929"  fill="none" stroke="url(#linearGradient2135)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                      <circle id="m_st308" transform="scale(-1)" cx="-330.56" cy="-199.49" r="3.7992"  fill="#fff" stroke="#0078bf" stroke-width="3.0341" style="paint-order:fill" onclick="sst(308)"></circle>
                      <path id="m_t505_1013" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-5.1446 7.6994 8.3338 8.3338 0 0 1-9.082-1.8065"  fill="none" stroke="url(#linearGradient2137)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                      <circle id="m_st1013" transform="scale(-1)" cx="-318.34" cy="-208.86" r="3.7992"  fill="#fff" stroke="#b4d445" stroke-width="3.0341" style="paint-order:fill" onclick="sst(1013)"></circle>
                      <path id="m_to308_1013" d="m330.56 199.49a8.3338 8.3338 0 0 1-2.9765 8.7686 8.3338 8.3338 0 0 1-9.2402 0.60563"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                      <circle id="m_st505" transform="scale(-1)" cx="-320.35" cy="-193.6" r="3.7992"  fill="#fff" stroke="#894e35" stroke-width="3.0341" style="paint-order:fill" onclick="sst(505)"></circle>
                      <path id="m_to308_505" transform="rotate(240)" d="m-327.84 180.64a8.3338 8.3338 0 0 1-10.207 5.8928"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                      <path id="m_to505_1013" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-5.1446 7.6994 8.3338 8.3338 0 0 1-9.082-1.8065"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                    </g>
                    <g transform="matrix(.29156 -1.2857 1.2857 .29156 330.24 707.41)" >
                      <path id="m_t710_817" d="m330.56 199.49a8.3338 8.3338 0 0 1-2.9765 8.7686 8.3338 8.3338 0 0 1-9.2402 0.60563" fill="none" stroke="url(#linearGradient2133-4)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                      <path id="m_t506_710" transform="rotate(240)" d="m-327.84 180.64a8.3338 8.3338 0 0 1-10.207 5.8929"  fill="none" stroke="url(#linearGradient2135-5)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                      <circle id="m_st710" transform="scale(-1)" cx="-330.56" cy="-199.49" r="4.173"  fill="#fff" stroke="#8e479b" stroke-width="3.0341" style="paint-order:fill" onclick="sst(710)"></circle>
                      <path id="m_t506_817" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-5.1446 7.6994 8.3338 8.3338 0 0 1-9.082-1.8065"  fill="none" stroke="url(#linearGradient2137-5)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                      <circle id="m_st817" transform="scale(-1)" cx="-318.34" cy="-208.86" r="4.173"  fill="#fff" stroke="#ffcc32" stroke-width="3.0341" style="paint-order:fill" onclick="sst(817)"></circle>
                      <path id="m_to710_817" d="m330.56 199.49a8.3338 8.3338 0 0 1-2.9765 8.7686 8.3338 8.3338 0 0 1-9.2402 0.60563"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                      <circle id="m_st506" transform="scale(-1)" cx="-320.35" cy="-193.6" r="4.173"  fill="#fff" stroke="#894e35" stroke-width="3.0341" style="paint-order:fill" onclick="sst(506)"></circle>
                      <path id="m_to506_710" transform="rotate(240)" d="m-327.84 180.64a8.3338 8.3338 0 0 1-10.207 5.8928"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                      <path id="m_to506_817" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-5.1446 7.6994 8.3338 8.3338 0 0 1-9.082-1.8065"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                    </g>
                    <g transform="matrix(-1.0459 -.80256 .80256 -1.0459 745.29 836.1)" >
                      <g>
                        <path id="m_t212_613" d="m330.56 199.49a8.3338 8.3338 0 0 1-2.9765 8.7686 8.3338 8.3338 0 0 1-9.2402 0.60563" fill="none" stroke="url(#linearGradient2133-4-4)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                        <path id="m_t613_816" transform="rotate(240)" d="m-327.84 180.64a8.3338 8.3338 0 0 1-10.207 5.8929" enable-background="" fill="none" stroke="url(#linearGradient2135-5-2)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                        <circle id="m_st613" transform="scale(-1)" cx="-330.56" cy="-199.49" r="4.1805"  fill="#fff" stroke="#f58231" stroke-width="3.0341" style="paint-order:fill" onclick="sst(613)"></circle>
                        <path id="m_t212_816" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-5.1446 7.6994 8.3338 8.3338 0 0 1-9.082-1.8065"  fill="none" stroke="url(#linearGradient2137-5-9)" stroke-width="5.3097" style="paint-order:stroke markers fill"></path>
                        <circle id="m_st212" transform="scale(-1)" cx="-318.34" cy="-208.86" r="4.1805"  fill="#fff" stroke="#4cb85e" stroke-width="3.0341" style="paint-order:fill" onclick="sst(212)"></circle>
                        <path id="m_to212_613" d="m330.56 199.49a8.3338 8.3338 0 0 1-2.9765 8.7686 8.3338 8.3338 0 0 1-9.2402 0.60563"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                        <circle id="m_st816" transform="scale(-1)" cx="-320.35" cy="-193.6" r="4.1805"  fill="#fff" stroke="#ffcc32" stroke-width="3.0341" style="paint-order:fill" onclick="sst(816)"></circle>
                        <path id="m_to613_816" transform="rotate(240)" d="m-327.84 180.64a8.3338 8.3338 0 0 1-10.207 5.8928"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                        <path id="m_to212_816" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-5.1446 7.6994 8.3338 8.3338 0 0 1-9.082-1.8065"  fill="none" stroke="#fff" stroke-width="1.517" style="paint-order:stroke markers fill"></path>
                      </g>
                      <circle id="m_stx816" transform="rotate(150)" cx="-180.64" cy="-327.84" r="1.1378" fill="#f58231" style="paint-order:stroke markers fill"></circle>
                      <circle id="m_stx613" transform="rotate(150)" cx="-186.53" cy="-338.04" r="1.1378"  fill="#ffcc32" style="paint-order:stroke markers fill"></circle>
                    </g>
                  </g>
                  <g transform="rotate(45 65.45 487.71)" >
                    <path id="m_t610_1424" d="m305.71 355.38v7.2172l2e-5 10.836"  fill="none" stroke="url(#linearGradient2782)" stroke-width="7"></path>
                    <circle id="m_st610" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#f58231" stroke-width="4" style="paint-order:fill" onclick="sst(610)"></circle>
                    <circle id="m_st1424" transform="scale(-1)" cx="-305.71" cy="-373.43" r="5.5126"  fill="#fff" stroke="#f2aba3" stroke-opacity=".95294" stroke-width="4" style="paint-order:fill" onclick="sst(1424)"></circle>
                    <path id="m_to610_1424" d="m305.71 355.38v7.2172l3e-5 10.836" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(90 557.01 547.87)" >
                    <path id="m_t818_1012" d="m305.71 350.87 1e-5 11.721-1e-5 7.2172"  fill="none" stroke="url(#linearGradient2471)" stroke-width="7"></path>
                    <circle id="m_st818" transform="scale(-1)" cx="-305.71" cy="-350.87" r="5.5"  fill="#fff" stroke="#ffcc32" stroke-width="4" style="paint-order:fill" onclick="sst(818)"></circle>
                    <circle id="m_st1012" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5"  fill="#fff" stroke="#b4d445" stroke-width="4" style="paint-order:fill" onclick="sst(1012)"></circle>
                    <path id="m_to818_1012" d="m305.71 350.87v18.939" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(90 501.91 597.85)" >
                    <path id="m_t709_1011" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient2471-4)" stroke-width="7"></path>
                    <circle id="m_st709" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#8e479b" stroke-width="4" style="paint-order:fill" onclick="sst(709)"></circle>
                    <circle id="m_st1011" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#b4d445" stroke-width="4" style="paint-order:fill" onclick="sst(1011)"></circle>
                    <path id="m_to709_1011" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(135 212.22 216.5)" >
                    <path id="m_t315_411" d="m305.71 351.81 4e-5 10.783-1e-5 7.2172"  fill="none" stroke="url(#linearGradient2320)" stroke-width="7" onclick=""></path>
                    <circle id="m_st411" transform="scale(-1)" cx="-305.71" cy="-351.81" r="5.5126"  fill="#fff" stroke="#00c0ff" stroke-width="4" style="paint-order:fill" onclick="sst(411)"></circle>
                    <circle id="m_st315" transform="scale(-1)" cx="-305.71" cy="-369.81" r="5.5126"  fill="#fff" stroke="#0078bf" stroke-width="4" style="paint-order:fill" onclick="sst(315)"></circle>
                    <path id="m_to315_411" d="m305.71 351.81 3e-5 10.783v7.2172" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(180 375.93 156.7)" >
                    <g>
                      <path id="m_t921_1020" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient2312)" stroke-width="7"></path>
                      <circle id="m_st1020" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#b4d445" stroke-width="4" style="paint-order:fill" onclick="sst(1020)"></circle>
                      <circle id="m_st921" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(92)"></circle>
                      <path id="m_to921_1020" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                    </g>
                    <circle id="m_stx921" transform="scale(-1)" cx="-305.71" cy="-373.38" r="1.5"  fill="#b4d445" style="paint-order:stroke markers fill"></circle>
                    <circle id="m_stx1020" transform="scale(-1)" cx="-305.71" cy="-355.38" r="1.5"  fill="#a1a2a3" style="paint-order:stroke markers fill"></circle>
                  </g>
                  <g transform="rotate(-30 -433.15 -172.94)" >
                    <path id="m_t922_1406" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient2353)" stroke-width="7"></path>
                    <circle id="m_st922" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(922)"></circle>
                    <circle id="m_st1406" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5126"  fill="#fff" stroke="#f2aba3" stroke-opacity=".99216" stroke-width="4" style="paint-order:fill" onclick="sst(1406)"></circle>
                    <path id="m_to922_1406" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(-90 356.05 -9.6355)" >
                    <path id="m_t121_1411" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient2353-9)" stroke-width="7"></path>
                    <circle id="m_st121" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#ee3124" stroke-width="4" style="paint-order:fill" onclick="sst(121)"></circle>
                    <circle id="m_st1411" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#f2aba3" stroke-opacity=".99216" stroke-width="4" style="paint-order:fill" onclick="sst(1411)"></circle>
                    <path id="m_to121_1411" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(225 464.49 350.76)" >
                    <path id="m_t211_507" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="none" stroke="url(#linearGradient2976)" stroke-width="7"></path>
                    <circle id="m_st211" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#4cb85e" stroke-width="4" style="paint-order:fill" onclick="sst(211)"></circle>
                    <circle id="m_st507" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5126"  fill="#fff" stroke="#894e35" stroke-width="4" style="paint-order:fill" onclick="sst(507)"></circle>
                    <path id="m_to211_507" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g fill="none">
                    <path id="m_t718_1431" d="m149.2 99.813 39.8-8e-3"  stroke="url(#linearGradient2689-6)" stroke-dasharray="2.00000001, 2.00000001" stroke-dashoffset=".6" stroke-width="2"></path>
                    <g stroke-dasharray="2, 2" stroke-width="2">
                      <path id="m_t220_1402" d="m263.34-6.5709-23.304 40.243"  stroke="url(#linearGradient2689-6-3)" stroke-dashoffset="2.8"></path>
                      <path id="m_t621_1407" d="m595.17-67.043 14.216 24.517"  stroke="url(#linearGradient2689-6-3-3)" stroke-dashoffset="1.4"></path>
                      <path id="m_t122_1410" d="m718.17 19.893h24.106"  stroke="url(#linearGradient2689-6-3-3-8)" stroke-dashoffset="1.8"></path>
                    </g>
                    <path id="m_t304_1412" d="m799.2 131.29 2e-3 -24.13"  stroke="url(#linearGradient2689-6-3-3-8-5)" stroke-dasharray="1.9993701, 1.9993701" stroke-dashoffset=".59981" stroke-width="1.9994"></path>
                    <path id="m_t820_1414" d="m828.95 235.25-19.669 19.669"  stroke="url(#linearGradient2689-6-3-3-8-5-3)" stroke-dasharray="2, 2" stroke-dashoffset="1" stroke-width="2"></path>
                    <path id="m_t1010_1419" d="m687.8 556.36 17.784-30.556"  stroke="url(#linearGradient2689-6-3-3-8-5-3-3)" stroke-dasharray="2, 2" stroke-dashoffset="1.2" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(45 339.86 184.95)" >
                    <path id="m_t412_1110" d="m305.71 355.38v7.2172l-1e-5 11.259"  fill="none" stroke="url(#linearGradient3194)" stroke-width="7"></path>
                    <circle id="m_st412" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#00c0ff" stroke-width="4" style="paint-order:fill" onclick="sst(412)"></circle>
                    <circle id="m_st1110" transform="scale(-1)" cx="-305.71" cy="-373.85" r="5.5126"  fill="#fff" stroke="#79cdcd" stroke-width="4" style="paint-order:fill" onclick="sst(1110)"></circle>
                    <path id="m_to412_1110" d="m305.71 355.38v18.476" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <path id="m_t210_1420" d="m605.14 600.54-25.111-25.111"  fill="none" stroke="url(#linearGradient2689-6-3-3-8-5-3-3-9)" stroke-dasharray="2, 2" stroke-dashoffset="1.2" stroke-width="2"></path>
                  <path id="m_t_108_1425" d="m219.21 495.4-15.845 15.845"  fill="none" stroke="url(#linearGradient2689-6-3-3-8-5-3-3-9-0)" stroke-dasharray="1.99899995, 1.99899995" stroke-dashoffset="1.7991" stroke-width="1.999"></path>
                  <g transform="rotate(30 1163 339.88)" >
                    <path id="m_t1021_1405" d="m305.71 355.38v7.2172l2e-5 10.836"  fill="none" stroke="url(#linearGradient3339)" stroke-width="7"></path>
                    <circle id="m_st1021" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5126"  fill="#fff" stroke="#b4d445" stroke-width="4" style="paint-order:fill" onclick="sst(1021)"></circle>
                    <circle id="m_st1405" transform="scale(-1)" cx="-305.71" cy="-373.43" r="5.5126"  fill="#fff" stroke="#f2aba3" stroke-opacity=".95294" stroke-width="4" style="paint-order:fill" onclick="sst(1405)"></circle>
                    <path id="m_to1021_1405" d="m305.71 355.38v7.2172l3e-5 10.836" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="matrix(-.92212 1.5972 -1.5972 -.92212 888.92 -34.532)" >
                    <path id="m_t312_404" d="m330.85 201.65a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0" fill="none" stroke="url(#linearGradient2249)" stroke-width="3.7956" style="paint-order:stroke markers fill"></path>
                    <path id="m_t312_511" transform="rotate(240)" d="m-327.55 178.48a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="url(#linearGradient2251)" stroke-width="3.7956" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st312" transform="scale(-1)" cx="-330.85" cy="-201.65" r="2.987"  fill="#fff" stroke="#0078bf" stroke-width="2.1689" style="paint-order:fill" onclick="sst(312)"></circle>
                    <path id="m_t404_511" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="url(#linearGradient2253)" stroke-width="3.7956" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st404" transform="scale(-1)" cx="-318.34" cy="-208.86" r="2.987"  fill="#fff" stroke="#00c0ff" stroke-width="2.1689" style="paint-order:fill" onclick="sst(404)"></circle>
                    <path id="m_to312_404" d="m330.85 201.65a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.0845" style="paint-order:stroke markers fill"></path>
                    <circle id="m_st511" transform="scale(-1)" cx="-318.34" cy="-194.43" r="2.987"  fill="#fff" stroke="#894e35" stroke-width="2.1689" style="paint-order:fill" onclick="sst(511)"></circle>
                    <path id="m_to312_511" transform="rotate(240)" d="m-327.55 178.48a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.0845" style="paint-order:stroke markers fill"></path>
                    <path id="m_to404_511" transform="rotate(120)" d="m21.709-380.13a8.3338 8.3338 0 0 1-4.1669 7.2172 8.3338 8.3338 0 0 1-8.3338 0"  fill="none" stroke="#fff" stroke-width="1.0845" style="paint-order:stroke markers fill"></path>
                  </g>
                  <g transform="rotate(-30 247.88 -20.692)" >
                    <path id="m_t213_309" d="m305.67 373.75 0.0456 3.2807-0.0911 15.09"  fill="none" stroke="url(#linearGradient6049-8)" stroke-width="7"></path>
                    <path id="m_t113_213" d="m305.71 355.38v7.2172l-0.0456 11.154"  fill="none" stroke="url(#linearGradient6049)" stroke-width="7"></path>
                    <g fill="#fff">
                      <circle id="m_st113" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5087"  stroke="#ee3124" stroke-width="4" style="paint-order:fill" onclick="sst(113)"></circle>
                      <circle id="m_st213" transform="scale(-1)" cx="-305.67" cy="-373.75" r="5.5087"  stroke="#4cb85e" stroke-width="4" style="paint-order:fill" onclick="sst(213)"></circle>
                      <circle id="m_st309" transform="rotate(105)" cx="299.66" cy="-396.7" r="5.5021"  stroke="#0078bf" stroke-width="4" style="paint-order:fill" onclick="sst(309)"></circle>
                    </g>
                    <path id="m_to113_213" d="m305.71 355.38v7.2172l-0.0456 11.154" fill="none" stroke="#fff" stroke-width="2"></path>
                    <path id="m_to213_309" d="m305.71 373.42v3.6086l-0.0911 15.09"  fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <circle id="m_st1428" transform="rotate(-90)" cx="-234.27" cy="143.17" r="6"  fill="#fff" stroke="#f3aba3" stroke-opacity=".99216" stroke-width="4" style="paint-order:fill" onclick="sst(1428)"></circle>
                  <path id="m_st850" transform="rotate(90)" d="m240.27-161.64a6 6 0 0 1-3 5.1962 6 6 0 0 1-6 0 6 6 0 0 1-3-5.1962"  fill="#fff" stroke="#ffcc32" stroke-width="4" style="paint-order:fill" onclick=""></path>
                  <g id="m_t1111_1428" transform="translate(-4 .00032906)">
                    <path id="m_t1111_1428-0" d="m165.64 234.27-11.259 1e-5 -7.2173-1e-5"  fill="none" stroke="url(#linearGradient3495-0)" stroke-width="7"></path>
                    <circle id="m_st1111-6-4" transform="rotate(-90)" cx="-234.27" cy="165.64" r="6"  fill="#fff" stroke="#79cdcd" stroke-width="4" style="paint-order:fill" onclick="sst(1111)"></circle>
                    <circle id="m_st1428-5" transform="rotate(-90)" cx="-234.27" cy="147.13" r="6"  fill="#fff" stroke="#f3aba3" stroke-opacity=".99216" stroke-width="4" style="paint-order:fill" onclick="sst(1428)"></circle>
                    <path id="m_to1111_1428-8" d="m165.64 234.27h-18.476"  fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g id="m_t850_1428" transform="translate(-4 .00031906)" >
                    <path id="m_t1111_1428-0-1" d="m165.64 234.27-11.259 1e-5 -7.2173-1e-5"  fill="none" stroke="url(#linearGradient3123)" stroke-width="7"></path>
                    <path transform="rotate(-90)" d="m-240.27 165.64a6 6 0 0 1 6-6 6 6 0 0 1 6 6"  fill="#fff" stroke="#ffcc32" stroke-width="4" style="paint-order:fill" onclick="sst(850)"></path>
                    <circle transform="rotate(-90)" cx="-234.27" cy="147.13" r="6"  fill="#fff" stroke="#f3aba3" stroke-opacity=".99216" stroke-width="4" style="paint-order:fill" onclick="sst(1428)"></circle>
                    <path id="m_to1111_1428-8-2" d="m165.64 234.27h-18.476"  fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g fill="#fff" stroke-width="4">
                    <path id="m_st1111" transform="rotate(-90)" d="m-228.27 161.64a6 6 0 0 1-3 5.1962 6 6 0 0 1-6 0 6 6 0 0 1-3-5.1962"  stroke="#79cdcd" style="paint-order:fill" onclick="sst(1111)"></path>
                    <path id="m_st851" d="m187.41 173.83a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  stroke="#ffcc32" style="paint-order:fill" onclick=""></path>
                    <path id="m_st1112" transform="scale(-1)" d="m-195.9-165.34a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  stroke="#79cdcd" style="paint-order:fill" onclick=""></path>
                    <circle id="m_st717" cx="191.65" cy="151.07" r="6"  stroke="#8e479b" style="paint-order:fill" onclick="sst(717)"></circle>
                  </g>
                  <g id="m_t717_1112" transform="rotate(90 210.99 214.93)" >
                    <path id="m_t1111_1428-0-1-2-6" d="m160.52 234.27-5.9353 1e-5 -3.8047-1e-5"  fill="none" stroke="url(#linearGradient3305)" stroke-width="7"></path>
                    <circle transform="rotate(-90)" cx="-234.27" cy="165.64" r="6"  fill="#fff" stroke="#79cdcd" stroke-width="4" style="paint-order:fill" onclick="sst(812)"></circle>
                    <circle transform="rotate(-90)" cx="-234.27" cy="147.13" r="6"  fill="#fff" stroke="#8e479b" stroke-width="4" style="paint-order:fill" onclick="sst(1428)"></circle>
                    <path id="m_to1111_1428-8-2-5-3" d="m165.64 234.27h-18.476"  fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g id="m_t1112_1429" transform="translate(-4 1.1816e-6)">
                    <path id="m_t1112_1429-2" d="m164.5 160.63 31.159 8.9572"  fill="none" stroke="url(#linearGradient2689-6-0-6-1)" stroke-dasharray="2, 2" stroke-dashoffset=".8" stroke-width="2"></path>
                    <circle cx="195.65" cy="169.58" r="6"  fill="#fff" stroke="#79cdcd" stroke-width="4" style="paint-order:fill" onclick="sst(1112)"></circle>
                  </g>
                  <path id="m_t851_1429" d="m160.5 160.63 28.413 8.1678"  fill="none" stroke="url(#linearGradient2689-6-0-6)" stroke-dasharray="2, 2" stroke-dashoffset=".8" stroke-width="2"></path>
                  <g id="m_t717_851" transform="rotate(90 210.99 214.93)" >
                    <path id="m_t1111_1428-0-1-2" d="m160.52 234.27-5.9353 1e-5 -3.8047-1e-5"  fill="none" stroke="url(#linearGradient3259)" stroke-width="7"></path>
                    <path transform="rotate(-90)" d="m-238.51 169.89a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  fill="#fff" stroke="#ffcc32" stroke-width="4" style="paint-order:fill" onclick="sst(851)"></path>
                    <circle transform="rotate(-90)" cx="-234.27" cy="147.13" r="6"  fill="#fff" stroke="#8e479b" stroke-width="4" style="paint-order:fill" onclick="sst(1428)"></circle>
                    <path id="m_to1111_1428-8-2-5" d="m165.64 234.27h-18.476"  fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g fill="#fff" stroke-width="4">
                    <circle id="m_st1429" transform="scale(-1)" cx="-160.5" cy="-160.63" r="5.5"  stroke="#f3aca4" style="paint-order:fill" onclick="sst(1429)"></circle>
                    <path id="m_st853" d="m270.72 90.519a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  stroke="#ffcc32" style="paint-order:fill" onclick=""></path>
                    <path id="m_st1114" transform="scale(-1)" d="m-279.2-82.034a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  stroke="#79cdcd" style="paint-order:fill" onclick=""></path>
                    <circle id="m_st217" transform="scale(-1)" cx="-274.96" cy="-104.25" r="6"  stroke="#4cb85e" style="paint-order:fill" onclick="sst(217)"></circle>
                  </g>
                  <g id="m_t217_853" transform="translate(-30.752 -265.56)" >
                    <path id="m_t717_1112-9" d="m305.71 351.84 3e-5 10.753-1e-5 7.2172"  fill="none" stroke="url(#linearGradient3586)" stroke-width="7"></path>
                    <circle transform="scale(-1)" cx="-305.71" cy="-369.81" r="6"  fill="#fff" stroke="#4cb85e" stroke-width="4" style="paint-order:fill" onclick="sst(217)"></circle>
                    <circle id="m_st1112-9" transform="rotate(45)" cx="464.96" cy="32.617" r="6.0094"  fill="#fff" stroke="#ffcc32" stroke-width="4" style="paint-order:fill" onclick="sst(853)"></circle>
                    <path id="m_to717_1112-3" d="m305.71 351.84 2e-5 10.753v7.2172" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g id="m_t217_1114" transform="rotate(-90 146.31 105.61)" >
                    <path id="m_t1111_1428-0-1-2-62" d="m160.52 234.27-5.9353 1e-5 -3.8047-1e-5"  fill="none" stroke="url(#linearGradient3048)" stroke-width="7"></path>
                    <path transform="rotate(-90)" d="m-238.51 169.89a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  fill="#fff" stroke="#79cdcd" stroke-width="4" style="paint-order:fill" onclick="sst(1114)"></path>
                    <circle transform="rotate(-90)" cx="-234.27" cy="147.13" r="6"  fill="#fff" stroke="#4cb85e" stroke-width="4" style="paint-order:fill" onclick="sst(217)"></circle>
                    <path id="m_to1111_1428-8-2-5-7" d="m165.64 234.27h-18.476"  fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g fill="#fff" stroke-width="4">
                    <path id="m_st1115" transform="rotate(225)" d="m-313.72 236.99a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  stroke="#79cdcd" style="paint-order:fill" onclick=""></path>
                    <path id="m_st854" transform="rotate(45)" d="m305.22-228.5a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  stroke="#ffcc32" style="paint-order:fill" onclick=""></path>
                    <circle id="m_st918" transform="scale(-1)" cx="-383.37" cy="-72.23" r="6"  stroke="#a1a2a3" style="paint-order:fill" onclick="sst(918)"></circle>
                  </g>
                  <g id="m_t854_918" transform="translate(77.677 -297.58)" >
                    <path id="m_t717_1112-9-5" d="m305.71 351.84 3e-5 10.753-1e-5 7.2172"  fill="none" stroke="url(#linearGradient3163)" stroke-width="7"></path>
                    <circle transform="scale(-1)" cx="-305.71" cy="-369.81" r="6"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(217)"></circle>
                    <circle id="m_st1112-9-2" transform="rotate(45)" cx="464.96" cy="32.617" r="6.0094"  fill="#fff" stroke="#ffcc32" stroke-width="4" style="paint-order:fill" onclick="sst(853)"></circle>
                    <path id="m_to717_1112-3-5" d="m305.71 351.84 2e-5 10.753v7.2172" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g id="m_t918_1115" transform="rotate(-90 184.25 35.116)" >
                    <path id="m_t1111_1428-0-1-2-62-8" d="m161.31 234.27-6.4206 1e-5 -4.1158-1e-5"  fill="none" stroke="url(#linearGradient3201)" stroke-width="7"></path>
                    <path transform="rotate(-45)" d="m-53.146 286.65a6 6 0 0 1 0-8.4853 6 6 0 0 1 8.4853 0"  fill="#fff" stroke="#79cdcd" stroke-width="4" style="paint-order:fill" onclick="sst(1114)"></path>
                    <circle transform="rotate(-90)" cx="-234.27" cy="147.13" r="6"  fill="#fff" stroke="#a1a2a3" stroke-width="4" style="paint-order:fill" onclick="sst(217)"></circle>
                    <path id="m_to1111_1428-8-2-5-7-2" d="m165.64 234.27h-18.476"  fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                  <g transform="rotate(90 427.13 759.38)" >
                    <g>
                      <path id="m_t703_1504" d="m305.71 355.38v7.2172l2e-5 10.783"  fill="url(#linearGradient5920)" stroke="url(#linearGradient5588)" stroke-width="7"></path>
                      <circle id="m_st703" transform="scale(-1)" cx="-305.71" cy="-355.38" r="5.5"  fill="#fff" stroke="#8e479b" stroke-width="4" style="paint-order:fill" onclick="sst(703)"></circle>
                      <circle id="m_st1504" transform="scale(-1)" cx="-305.71" cy="-373.38" r="5.5"  fill="#fff" stroke="#de64a1" stroke-width="4" style="paint-order:fill" onclick="sst(1504)"></circle>
                    </g>
                    <path id="m_to703_1504" d="m305.71 355.38v7.2172l3e-5 10.783" fill="none" stroke="#fff" stroke-width="2"></path>
                  </g>
                </g>
                <g id="m_layerStations" transform="translate(0 217.48)">
                  <g fill="#fff">
                    <g stroke="#f3aca4">
                      <circle id="m_st1414" transform="scale(-1)" cx="-828.95" cy="-235.26" r="5.5" stroke-width="4" style="paint-order:fill" onclick="sst(1414)"></circle>
                      <circle id="m_st1419" transform="scale(-1)" cx="-687.8" cy="-556.36" r="5.5" stroke-width="4" style="paint-order:fill" onclick="sst(1419)"></circle>
                      <circle id="m_st1420" transform="scale(-1)" cx="-604.91" cy="-600.33" r="5.5" stroke-width="4" style="paint-order:fill" onclick="sst(1420)"></circle>
                      <g stroke-width="4">
                        <circle id="m_st1431" transform="scale(-1)" cx="-189" cy="-99.806" r="5.5" style="paint-order:fill" onclick="sst(1431)"></circle>
                        <circle id="m_st1402" transform="scale(-1)" cx="-240.01" cy="-33.65" r="5.5" style="paint-order:fill" onclick="sst(1402)"></circle>
                        <circle id="m_st1410" transform="scale(-1)" cx="-717.63" cy="-19.893" r="5.5" style="paint-order:fill" onclick="sst(1410)"></circle>
                      </g>
                    </g>
                    <g stroke-width="4">
                      <circle id="m_st210" transform="scale(-1)" cx="-580.03" cy="-575.43" r="5.5" stroke="#4cb85e" style="paint-order:fill" onclick="sst(210)"></circle>
                      <circle id="m_st220" transform="scale(-1)" cx="-260.69" cy="1.9928" r="5.5" stroke="#4cb85e" style="paint-order:fill" onclick="sst(220)"></circle>
                      <circle id="m_st621" transform="scale(-1)" cx="-595.17" cy="67.043" r="5.5" stroke="#f58231" style="paint-order:fill" onclick="sst(621)"></circle>
                    </g>
                    <circle transform="scale(-1)" cx="-806.64" cy="-83.412" r="0"  stroke="#0078bf" stroke-width="2" style="paint-order:fill"></circle>
                    <g stroke-width="4">
                      <circle id="m_st1010" transform="scale(-1)" cx="-705.58" cy="-525.8" r="5.5"  stroke="#b4d445" style="paint-order:fill" onclick="sst(1010)"></circle>
                      <circle id="m_st718" transform="scale(-1)" cx="-149.2" cy="-99.813" r="5.5"  stroke="#8e479b" style="paint-order:fill" onclick="sst(718)"></circle>
                      <circle id="m_st1407" transform="scale(-1)" cx="-606.84" cy="46.93" r="5.5"  stroke="#f3aca4" style="paint-order:fill" onclick="sst(1407)"></circle>
                    </g>
                    <circle id="m_st108" transform="scale(-1)" cx="-203.36" cy="-511.24" r="5.5"  stroke="#ee3124" stroke-width="4" style="paint-order:fill" onclick="sst(108)"></circle>
                    <g stroke-width="4">
                      <circle id="m_st1425" transform="scale(-1)" cx="-219.21" cy="-495.4" r="5.5"  stroke="#f3aca4" style="paint-order:fill" onclick="sst(1425)"></circle>
                      <circle id="m_st820" transform="scale(-1)" cx="-809.28" cy="-254.92" r="5.5"  stroke="#ffcc32" style="paint-order:fill" onclick="sst(820)"></circle>
                      <circle id="m_st1412" transform="scale(-1)" cx="-799.2" cy="-131.29" r="5.5"  stroke="#f3aca4" style="paint-order:fill" onclick="sst(1412)"></circle>
                      <circle id="m_st304" transform="scale(-1)" cx="-799.21" cy="-107.17" r="5.5"  stroke="#0078bf" style="paint-order:fill" onclick="sst(304)"></circle>
                      <circle id="m_st122" transform="scale(-1)" cx="-742.27" cy="-19.893" r="5.5"  stroke="#ee3124" style="paint-order:fill" onclick="sst(122)"></circle>
                    </g>
                  </g>
                  <g shape-rendering="auto">
                    <g fill="#ffcc32">
                      <path id="m_st810" d="m77.806 452.18v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(810)"></path>
                      <path id="m_st809" d="m77.806 480.12v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(809)"></path>
                      <path id="m_st808" d="m77.806 520.69v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(808)"></path>
                    </g>
                    <g fill="#ee3124">
                      <path id="m_st101" d="m203.36 738.4v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(101)"></path>
                      <path id="m_st102" d="m203.36 709.48v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(102)"></path>
                      <path id="m_st103" d="m203.36 680.77v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(103)"></path>
                      <path id="m_st104" d="m203.36 652.47v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(104)"></path>
                      <path id="m_st105" d="m203.36 612.99v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(105)"></path>
                      <path id="m_st106" d="m203.36 583.2v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(106)"></path>
                      <path id="m_st107" d="m203.36 541.99v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(107)"></path>
                      <path id="m_st109" d="m217.47 426.57-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(109)"></path>
                    </g>
                    <g>
                      <path id="m_st602" d="m328.92 820.66v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#f58231" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(602)"></path>
                      <path id="m_st1207" d="m200.8 923.2h-5v15h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#acbfe3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1207)"></path>
                      <path id="m_st1206" d="m267.81 930.7h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#acbfe3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1206)"></path>
                    </g>
                    <g fill="#a1a2a3">
                      <path id="m_st902" d="m454.47 881.98v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(902)"></path>
                      <path id="m_st903" d="m454.47 847.68v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(903)"></path>
                      <path id="m_st904" d="m454.47 824.09v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(904)"></path>
                      <path id="m_st905" d="m454.47 800.51v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(905)"></path>
                      <path id="m_st906" d="m454.47 776.93v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(906)"></path>
                    </g>
                    <g>
                      <path id="m_st1102" d="m519.73 731.05h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#dbf1f1" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick=""></path>
                      <path id="m_st908" d="m454.47 689.41v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(908)"></path>
                      <path id="m_st909" d="m454.47 665.82v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(909)"></path>
                    </g>
                    <g fill="#f58231">
                      <path id="m_st603" d="m328.92 792.67v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(603)"></path>
                      <path id="m_st604" d="m328.92 764.59v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(604)"></path>
                      <path id="m_st605" d="m328.92 736.51v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(605)"></path>
                      <path id="m_st606" d="m328.92 708.43v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(606)"></path>
                      <path id="m_st607" d="m328.92 680.36v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(607)"></path>
                      <path id="m_st608" d="m328.92 652.28v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(608)"></path>
                      <path id="m_st609" d="m328.92 624.2v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(609)"></path>
                    </g>
                    <g fill="#4cb85e">
                      <path id="m_st201" d="m777.04 861.83h-5v15h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(201)"></path>
                      <path id="m_st203" d="m587.53 851.3v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(203)"></path>
                      <path id="m_st204" d="m587.53 815.62v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(204)"></path>
                      <path id="m_st205" d="m587.53 779.95v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(205)"></path>
                      <path id="m_st206" d="m587.53 744.27v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(206)"></path>
                      <path id="m_st208" d="m587.53 672.92v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(208)"></path>
                      <path id="m_st209" d="m587.53 637.24v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(209)"></path>
                    </g>
                    <g fill="#b4d445">
                      <path id="m_st1002" d="m713.08 822.47v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1002)"></path>
                      <path id="m_st1003" d="m713.08 786.07v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1003)"></path>
                      <path id="m_st1004" d="m713.08 749.67v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1004)"></path>
                      <path id="m_st1005" d="m713.08 713.27v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1005)"></path>
                      <path id="m_st1006" d="m713.08 676.86v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1006)"></path>
                      <path id="m_st1007" d="m713.08 640.46v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1007)"></path>
                      <path id="m_st1008" d="m713.08 604.06v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1008)"></path>
                      <path id="m_st1009" d="m713.08 567.66v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1009)"></path>
                    </g>
                    <g fill="#8e479b">
                      <path id="m_st701" d="m838.64 732.57v-5h-15v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(701)"></path>
                      <path id="m_st702" d="m838.64 691.11v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(702)"></path>
                      <path id="m_st704" d="m838.64 599.19v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(704)"></path>
                      <path id="m_st705" d="m838.64 547.17v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(705)"></path>
                      <path id="m_st706" d="m838.64 505.61v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(706)"></path>
                      <path id="m_st707" d="m820.82 467.68-3.5355-3.5355-5.3033 5.3033 3.5355 3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(707)"></path>
                      <path id="m_st708" d="m781.49 428.34-3.5355-3.5355-5.3033 5.3033 3.5355 3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(708)"></path>
                    </g>
                    <path id="m_st111" d="m368.68 369.46h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#ee3124" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(111)"></path>
                    <path id="m_st116" d="m611.13 151.2-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#ee3124" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(116)"></path>
                    <g fill="#4cb85e">
                      <path id="m_st215" d="m354.88 173.52-3.5355-3.5355-5.3033 5.3033 3.5355 3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(215)"></path>
                      <path id="m_st219" d="m268.19 28.005v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(219)"></path>
                      <path id="m_st221" d="m268.19-76.618v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(221)"></path>
                      <path id="m_st222" d="m268.19-102.66v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(222)"></path>
                      <path id="m_st224" d="m268.19-154.73v-5h-15v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(224)"></path>
                    </g>
                    <g fill="#8e479b">
                      <path id="m_st723" d="m156.7-107.57v-5h-15v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(723)"></path>
                      <path id="m_st722" d="m156.7-79.004v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(722)"></path>
                      <path id="m_st721" d="m156.7-50.438v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(721)"></path>
                      <path id="m_st720" d="m156.7-21.872v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(720)"></path>
                      <path id="m_st719" d="m156.7 6.6934v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(719)"></path>
                      <path id="m_st716" d="m234.88 194.63-3.5355-3.5355-5.3033 5.3033 3.5355 3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(716)"></path>
                      <path id="m_st715" d="m254.92 214.62-3.5355-3.5355-5.3033 5.3033 3.5355 3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(715)"></path>
                    </g>
                    <g fill="#ee3124">
                      <path id="m_st118" d="m661.13 100.95-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(118)"></path>
                      <path id="m_st119" d="m682.5 79.573-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(119)"></path>
                      <path id="m_st120" d="m712.3 49.485-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(120)"></path>
                    </g>
                    <g fill="#0078bf">
                      <path id="m_st321" d="m37.703 16.028v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(321)"></path>
                      <path id="m_st320" d="m37.703 41.735v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(320)"></path>
                      <path id="m_st319" d="m37.703 67.442v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(319)"></path>
                      <path id="m_st318" d="m37.703 93.149v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(318)"></path>
                    </g>
                    <path id="m_st925" d="m491.18-169.95v-5h-15v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(925)"></path>
                    <path id="m_st924" d="m491.18-139.51v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(924)"></path>
                    <g fill="#b4d445">
                      <path id="m_st1018" d="m491.18 5.972v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1018)"></path>
                      <path id="m_st1017" d="m491.18 36.564v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1017)"></path>
                      <path id="m_st1016" d="m491.19 67.156v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1016)"></path>
                    </g>
                    <g fill="#f58231">
                      <path id="m_st616" d="m538.84 119.35v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(616)"></path>
                      <path id="m_st618" d="m588.57 45.541-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(618)"></path>
                      <path id="m_st619" d="m595.17 12.98v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(619)"></path>
                      <path id="m_st622" d="m595.17-95.358v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(622)"></path>
                      <path id="m_st623" d="m595.17-127.54v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(623)"></path>
                      <path id="m_st624" d="m587.67-159.73v5h15v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(624)"></path>
                    </g>
                    <g>
                      <path id="m_st403" d="m333.28 273.82h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#00c0ff" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(403)"></path>
                      <path id="m_st402" d="m373.86 284.36-3.5355-3.5355-5.3033 5.3033 3.5355 3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#00c0ff" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(402)"></path>
                      <path id="m_st911" d="m454.47 543.57v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(911)"></path>
                      <path id="m_st913" d="m454.47 434.75v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(913)"></path>
                    </g>
                    <g fill="#0078bf">
                      <path id="m_st307" d="m721.35 183.48-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(307)"></path>
                      <path id="m_st306" d="m745.93 158.91-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(306)"></path>
                      <path id="m_st305" d="m769.41 135.45-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(305)"></path>
                      <path id="m_st301" d="m823.64-9.6785v5h15v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(301)"></path>
                      <path id="m_st302" d="m831.14 24.867v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(302)"></path>
                      <path id="m_st303" d="m831.14 59.412v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(303)"></path>
                    </g>
                    <path id="m_st919" d="m370.27 31.544v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(919)"></path>
                    <g fill="#ffcc32">
                      <path id="m_st823" d="m910.32 294.16-10.607 10.607 3.5352 3.5352 10.607-10.607z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(823)"></path>
                      <path id="m_st822" d="m891.16 274.99-5.3027 5.3027 3.5352 3.5352 5.3027-5.3027z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(822)"></path>
                      <path id="m_st821" d="m872.54 256.37-5.3027 5.3027 3.5352 3.5352 5.3027-5.3027z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(821)"></path>
                      <path id="m_st819" d="m785.51 265.07-3.5352 3.5352 5.3047 5.3027 3.5352-3.5352z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(819)"></path>
                    </g>
                    <g>
                      <path id="m_st611" d="m328.92 500.76v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#f58231" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(611)"></path>
                      <path id="m_st1019" d="m481.28-17.48-3.5355-3.5355-5.3033 5.3033 3.5355 3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#b4d445" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1019)"></path>
                      <path id="m_st923" d="m491.18-109.07v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(924)"></path>
                      <path id="m_st1022" d="m379.69-125.31v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#b4d445" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1022)"></path>
                      <path id="m_st1023" d="m379.69-169.95v-5h-15v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#b4d445" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1023)"></path>
                      <path id="m_st920" d="m395.18-8.9265-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(920)"></path>
                      <path id="m_st322" d="m30.203-9.6785v5h15v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#0078bf" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(322)"></path>
                    </g>
                    <g fill="#f3aba3" fill-opacity=".99216">
                      <path id="m_st1423" d="m382.55 597.72-2.9861 9.525c0.78932 0.26841 1.5794 0.52865 2.376 0.77839 0.79627 0.24963 1.5966 0.47957 2.3951 0.71734l2.9861-9.5249z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1423)"></path>
                      <path id="m_st1418" d="m735.55 511.21 7.3265 6.8031 3.4022-3.664-7.3265-6.8031c-0.5521 0.62396-1.11 1.2424-1.6777 1.8538-0.56796 0.61166-1.1488 1.2078-1.7246 1.8102z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1418)"></path>
                      <path id="m_st1421" d="m545.72 608.63 1.8371 9.8116c0.82291-0.13374 1.6426-0.27502 2.4632-0.42866 0.82023-0.15358 1.6348-0.32644 2.4514-0.49157l-1.8371-9.8115z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1421)"></path>
                    </g>
                    <g>
                      <path id="m_st1113" d="m250.95 113.82-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#79cdcd" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1113)"></path>
                      <path id="m_st852" d="m247.42 110.29-3.5355 3.5355 5.3033 5.3033 3.5355-3.5355z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#ffcc32" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(852)"></path>
                      <path id="m_st620" d="m595.17-19.421v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#f58231" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(620)"></path>
                      <path id="m_st218" d="m268.19 58.391v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#4cb85e" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(218)"></path>
                    </g>
                    <path id="m_st1422" d="m475.54 613.79-0.23052 9.9794c0.83278 0.0392 1.664 0.0704 2.4986 0.0897 0.83426 0.0193 1.6669 0.0185 2.5001 0.0257l0.23052-9.9794z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#f3aba3" fill-opacity=".99216" image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1422)"></path>
                    <g>
                      <path id="m_st910" d="m454.47 642.24v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#a1a2a3" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(910)"></path>
                      <path id="m_st317" d="m37.703 118.86v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#0078bf" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(317)"></path>
                      <path id="m_st316" d="m37.703 144.56v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#0078bf" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(316)"></path>
                      <path id="m_st410" d="m50.431 208.02v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#00c0ff" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(410)"></path>
                      <path id="m_st409" d="m50.431 231.6v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#00c0ff" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(409)"></path>
                    </g>
                    <g fill="#acbfe3">
                      <path id="m_st1205" d="m334.83 930.7h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1205)"></path>
                      <path id="m_st1204" d="m401.84 930.7h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1204)"></path>
                      <path id="m_st1202" d="m396.13 869.33h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1202)"></path>
                    </g>
                    <path id="m_st311" d="m333.28 300.44h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#0078bf" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(311)"></path>
                    <path id="m_st405" d="m203.71 325.11-3.5355 3.5356 5.3033 5.3033 3.5355-3.5356z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#00c0ff" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(405)"></path>
                    <g fill="#f3aba3" fill-opacity=".99216">
                      <path id="m_st1415" d="m826.91 312.73 9.9482 0.99625 0.49823-4.9751-9.9482-0.99624c-0.0631 0.83076-0.13413 1.6606-0.21727 2.4907-0.0832 0.83053-0.18599 1.6564-0.28095 2.4844z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1415)"></path>
                      <path id="m_st1416" d="m821.16 348.7 9.7863 2.0464 1.0234-4.8941-9.7864-2.0464c-0.1509 0.81938-0.30959 1.637-0.48036 2.4536-0.17087 0.81701-0.36073 1.6273-0.54301 2.4405z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1416)"></path>
                      <path id="m_st1417" d="m811.35 384.58 9.5076 3.093 1.5468-4.7547-9.5076-3.093c-0.23865 0.79825-0.48485 1.5939-0.74295 2.3873-0.25825 0.79374-0.53465 1.5788-0.80382 2.3675z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1417)"></path>
                      <path id="m_st1413" d="m821.76 206.36 9.7899-2.0293-1.0148-4.8959-9.7899 2.0293c0.18863 0.81152 0.36941 1.6245 0.53876 2.4415 0.16939 0.81732 0.31869 1.6361 0.47608 2.4545z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1413)"></path>
                      <path id="m_st1409" d="m685.58-2.7256 5.7615-8.171-4.0863-2.8813-5.7615 8.171c0.69223 0.46363 1.3797 0.9337 2.0616 1.4145 0.68214 0.48102 1.3506 0.97682 2.0247 1.4668z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1409)"></path>
                      <path id="m_st1408" d="m650.22-24.913 4.7243-8.8114-4.4066-2.3626-4.7243 8.8114c0.74351 0.37595 1.4831 0.75886 2.2184 1.1531 0.7356 0.39444 1.4594 0.80521 2.1882 1.2095z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1408)"></path>
                      <path id="m_st1404" d="m354.21-40.457-3.9086-9.2024-4.6021 1.9547 3.9086 9.2024c0.7588-0.34402 1.5206-0.68062 2.2885-1.0068 0.76826-0.32628 1.5419-0.63314 2.3136-0.94788z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1404)"></path>
                      <path id="m_st1403" d="m318.45-23.067-4.9492-8.6871-4.3444 2.4751 4.9492 8.6871c0.7138-0.42968 1.4314-0.85234 2.1564-1.2654 0.72525-0.41317 1.4581-0.80766 2.188-1.2098z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1403)"></path>
                      <path id="m_st1401" d="m218.49 61.606-7.8461-6.1967-3.099 3.9238 7.8461 6.1967c0.50053-0.66604 1.0072-1.327 1.5244-1.9818 0.51735-0.65501 1.0487-1.2956 1.5746-1.9421z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1401)"></path>
                      <path id="m_st1430" d="m170.45 141.72-9.2255-3.8535-1.9271 4.6137 9.2256 3.8535c0.30256-0.77627 0.61245-1.5493 0.93402-2.3192 0.32173-0.77019 0.66086-1.5302 0.99308-2.2945z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap6" onclick="sst(1430)"></path>
                    </g>
                    <g>
                      <path id="m_st408" d="m50.431 329.16v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#00c0ff" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(408)"></path>
                      <path id="m_st407" d="m50.431 352.75v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#00c0ff" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(407)"></path>
                      <path id="m_st314" d="m60.495 409.63h-5v7.5h5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#0078bf" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(314)"></path>
                    </g>
                    <g fill="#ffcc32">
                      <path id="m_st801" d="m70.306 738.4v5h15v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(801)"></path>
                      <path id="m_st802" d="m77.806 708.5v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(802)"></path>
                      <path id="m_st803" d="m77.806 678.6v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(803)"></path>
                      <path id="m_st804" d="m77.806 649.2v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(804)"></path>
                      <path id="m_st805" d="m77.806 619.2v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(805)"></path>
                      <path id="m_st806" d="m77.806 589.3v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(806)"></path>
                      <path id="m_st807" d="m77.806 548.63v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(807)"></path>
                    </g>
                    <path id="m_st223" d="m268.19-128.69v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  fill="#4cb85e" image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(223)"></path>
                    <g fill="#de64a1">
                      <path id="m_st1503" d="m919.67 672.51v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1503)"></path>
                      <path id="m_st1502" d="m919.67 707.82v-5h-7.5v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1502)"></path>
                      <path id="m_st1501" d="m919.67 732.57v-5h-15v5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(1501)"></path>
                    </g>
                    <g fill="#ee3124">
                      <path id="m_st153" d="m203.36 767.31v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(153)"></path>
                      <path id="m_st152" d="m203.36 796.23v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(152)"></path>
                      <path id="m_st151" d="m203.36 825.15v5h7.5v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(151)"></path>
                      <path id="m_st150" d="m195.86 854.07v5h15v-5z" color="#000000" color-rendering="auto" dominant-baseline="auto"  image-rendering="auto" solid-color="#000000" class="stylemap5" onclick="sst(150)"></path>
                    </g>
                  </g>
                </g>
                <g transform="translate(0 217.48)">
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <g>
                      <g>
                        <text id="m_lbl512" x="297.63107" y="239.87436" class="stylemap3" onclick="sst(512)" xml:space="preserve"><tspan x="297.63107" y="239.87436" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Краснопресненская</tspan></text>
                        <text id="m_lbl503" x="570.01855" y="83.298286" class="stylemap2" onclick="sst(503,617)" xml:space="preserve"><tspan x="570.01855" y="83.298286" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Проспект Мира</tspan></text>
                        <text id="m_lbl117" x="645.28125" y="137.03276" class="stylemap3" onclick="sst(117, 504)" xml:space="preserve"><tspan x="645.28125" y="137.03276" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Комсомольская</tspan></text>
                      </g>
                      <text id="m_lbl506" x="670.49579" y="341.91766" text-align="end" text-anchor="end" class="stylemap3" onclick="sst(506,710)" xml:space="preserve"><tspan x="670.49579" y="341.91766" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Таганская</tspan></text>
                      <g>
                        <text id="m_lbl211" x="590.02789" y="465.28354" class="stylemap3" onclick="sst(211,507)" xml:space="preserve"><tspan x="590.02789" y="465.28354" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Павелецкая</tspan></text>
                        <text id="m_lbl508" x="467.68433" y="466.14642" class="stylemap3" onclick="sst(508)" xml:space="preserve"><tspan x="467.68433" y="466.14642" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Добрынинская</tspan></text>
                        <text id="m_lbl609" x="338.91702" y="629.19818" class="stylemap3" onclick="sst(609)" xml:space="preserve"><tspan x="338.91702" y="629.19818" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Академическая</tspan></text>
                        <text id="m_lbl608" x="338.91702" y="657.27692" class="stylemap3" onclick="sst(608)" xml:space="preserve"><tspan x="338.91702" y="657.27692" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Профсоюзная</tspan></text>
                        <text id="m_lbl607" x="338.91702" y="685.35559" class="stylemap2" onclick="sst(607)" xml:space="preserve"><tspan x="338.91702" y="685.35559" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Новые Черёмушки</tspan></text>
                        <text id="m_lbl606" x="338.91702" y="713.43433" class="stylemap3" onclick="sst(606)" xml:space="preserve"><tspan x="338.91702" y="713.43433" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Калужская</tspan></text>
                        <text id="m_lbl605" x="338.91702" y="741.51306" class="stylemap3" onclick="sst(605)" xml:space="preserve"><tspan x="338.91702" y="741.51306" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Беляево</tspan></text>
                        <text id="m_lbl604" x="338.91702" y="769.5918" class="stylemap3" onclick="sst(604)" xml:space="preserve"><tspan x="338.91702" y="769.5918" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Коньково</tspan></text>
                        <text id="m_lbl603" x="338.91702" y="797.67053" class="stylemap3" onclick="sst(603)" xml:space="preserve"><tspan x="338.91702" y="797.67053" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Тёплый Стан</tspan></text>
                        <text id="m_lbl602" x="338.91702" y="825.74921" class="stylemap3" onclick="sst(602)" xml:space="preserve"><tspan x="338.91702" y="825.74921" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Ясенево</tspan></text>
                        <text id="m_lbl601" x="355.24625" y="853.82794" class="stylemap3" onclick="sst(601)" xml:space="preserve"><tspan x="355.24625" y="853.82794" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Новоясеневская</tspan></text>
                        <text id="m_lbl910" x="464.47247" y="647.24426" class="stylemap3" onclick="sst(910)" xml:space="preserve"><tspan x="464.47247" y="647.24426" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Нагатинская</tspan></text>
                        <text id="m_lbl909" x="464.47247" y="670.82489" class="stylemap3" onclick="sst(909)" xml:space="preserve"><tspan x="464.47247" y="670.82489" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Нагорная</tspan></text>
                        <text id="m_lbl908" x="464.47247" y="694.40552" class="stylemap2" onclick="sst(908)" xml:space="preserve"><tspan x="464.47247" y="694.40552" class="stylemap2">Нахимовский</tspan><tspan x="464.47247" y="705.0722" class="stylemap2">проспект</tspan></text>
                        <text id="m_lbl907" x="464.47247" y="758.35266" class="stylemap3" onclick="sst(907)" xml:space="preserve"><tspan x="464.47247" y="758.35266" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Севастопольская</tspan></text>
                        <text id="m_lbl906" x="464.47247" y="781.93329" class="stylemap3" onclick="sst(906)" xml:space="preserve"><tspan x="464.47247" y="781.93329" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Чертановская</tspan></text>
                        <text id="m_lbl905" x="464.53616" y="805.51398" class="stylemap3" onclick="sst(905)" xml:space="preserve"><tspan x="464.53616" y="805.51398" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Южная</tspan></text>
                        <text id="m_lbl904" x="464.53616" y="829.0946" class="stylemap3" onclick="sst(904)" xml:space="preserve"><tspan x="464.53616" y="829.0946" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Пражская</tspan></text>
                        <text id="m_lbl903" x="464.53616" y="852.67529" class="stylemap2" onclick="sst(903)" xml:space="preserve"><tspan x="464.53616" y="852.67529" class="stylemap2">Улица Академика</tspan><tspan x="464.53616" y="863.34198" class="stylemap2">Янгеля</tspan></text>
                        <text id="m_lbl1411" x="749.05927" y="43.197247" class="stylemap3" onclick="sst(1411)" xml:space="preserve"><tspan x="749.05927" y="43.197247" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Локомотив</tspan></text>
                        <text id="m_lbl1412" x="809.20349" y="133.78909" class="stylemap3" onclick="sst(1412)" xml:space="preserve"><tspan x="809.20349" y="133.78909" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Измайлово</tspan></text>
                        <text id="m_lbl1413" x="833.59778" y="203.44426" class="stylemap2" onclick="sst(1413)" xml:space="preserve"><tspan x="833.59778" y="203.44426" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Соколиная Гора</tspan></text>
                        <text id="m_lbl1415" x="839.96509" y="314.38916" class="stylemap3" onclick="sst(1415)" xml:space="preserve"><tspan x="839.96509" y="314.38916" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Андроновка</tspan></text>
                        <text id="m_lbl1416" x="834.37292" y="351.259" class="stylemap3" onclick="sst(1416)" xml:space="preserve"><tspan x="834.37292" y="351.259" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Нижегородская</tspan></text>
                        <text id="m_lbl1417" x="824.45251" y="388.12881" class="stylemap3" onclick="sst(1417)" xml:space="preserve"><tspan x="824.45251" y="388.12881" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Новохохловская</tspan></text>
                        <text id="m_lbl1418" x="746.27496" y="523.7052" class="stylemap3" onclick="sst(1418)" xml:space="preserve"><tspan x="746.27496" y="523.7052" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Угрешская</tspan></text>
                      </g>
                      <text id="m_lbl1010" x="695.58319" y="528.30151" text-align="end" text-anchor="end" class="stylemap3" onclick="sst(1010)" xml:space="preserve"><tspan x="695.58319" y="528.30151" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Дубровка</tspan></text>
                      <text id="m_lbl1421" x="550.07758" y="604.70648" text-align="end" text-anchor="end" class="stylemap3" onclick="sst(1421)" xml:space="preserve"><tspan x="550.07758" y="604.70648" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">ЗИЛ</tspan></text>
                      <text id="m_lbl1422" x="475.36655" y="600.57928" class="stylemap2" onclick="sst(1422)" xml:space="preserve"><tspan x="475.36655" y="600.57928" class="stylemap2">Верхние</tspan><tspan x="475.36655" y="611.24597" class="stylemap2">Котлы</tspan></text>
                      <text id="m_lbl1423" x="383.31613" y="595.2608" class="stylemap3" onclick="sst(1423)" xml:space="preserve"><tspan x="383.31613" y="595.2608" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Крымская</tspan></text>
                    </g>
                    <text id="m_lbl1424" x="318.65247" y="592.45251" font-stretch="condensed" text-align="end" text-anchor="end" class="stylemap2" onclick="sst(1424)" xml:space="preserve"><tspan x="318.65247" y="592.45251" text-align="end" class="stylemap2">Площадь</tspan><tspan x="318.65247" y="603.1192" text-align="end" class="stylemap2">Гагарина</tspan></text>
                    <text id="m_lbl1425" x="216.70683" y="485.39801" class="stylemap3" onclick="sst(1425)" xml:space="preserve"><tspan x="216.70683" y="485.39801" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Лужники</tspan></text>
                    <text id="m_lbl1427" x="130.83455" y="299.88568" text-align="end" text-anchor="end" class="stylemap2" onclick="sst(1427)" xml:space="preserve"><tspan x="130.83455" y="299.88568" text-align="end" class="stylemap2">Деловой</tspan><tspan x="130.83455" y="310.55234" text-align="end" class="stylemap2">центр</tspan></text>
                  </g>
                  <g id="m_lbl850" transform="translate(-27.785 -55.934)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" word-spacing="0px" onclick="sst(850,1111,1428)">
                    <text x="175.39656" y="305.96121" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" stroke-width="2" class="stylemap1" onclick="" xml:space="preserve"><tspan x="175.39656" y="305.96121" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Шелепиха</tspan></text>
                    <text x="175.39656" y="305.96121" dominant-baseline="auto" fill="#000000" stroke-width="1.9994" class="stylemap1" onclick="" xml:space="preserve"><tspan x="175.39656" y="305.96121" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="1.9994" word-spacing="0px" class="stylemap1">Шелепиха</tspan></text>
                  </g>
                  <text id="m_lbl1429" x="150.96945" y="163.1274" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" text-align="end" text-anchor="end" word-spacing="0px" class="stylemap3" onclick="sst(1429)" xml:space="preserve"><tspan x="150.96945" y="163.1274" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Хорошёво</tspan></text>
                  <text id="m_lbl1430" x="158.33432" y="140.71461" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" text-align="end" text-anchor="end" word-spacing="0px" class="stylemap3" onclick="sst(1430)" xml:space="preserve"><tspan x="158.33432" y="140.71461" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Зорге</tspan></text>
                  <g id="m_lbl1431" transform="translate(-4)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(1431)">
                    <text x="177.9803" y="115.85265" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="177.9803" y="115.85265" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Панфиловская</tspan></text>
                    <text x="177.9803" y="115.85265" dominant-baseline="auto" fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="177.9803" y="115.85265" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Панфиловская</tspan></text>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px">
                    <g stroke-width=".26458" text-anchor="end">
                      <text id="m_lbl1401" x="207.92982" y="56.454449" text-align="end" class="stylemap3" onclick="sst(1401)" xml:space="preserve"><tspan x="207.92982" y="56.454449" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Стрешнево</tspan></text>
                      <text id="m_lbl1402" x="231.02431" y="33.259197" text-align="end" class="stylemap3" onclick="sst(1402)" xml:space="preserve"><tspan x="231.02431" y="33.259197" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Балтийская</tspan></text>
                      <text id="m_lbl1403" x="310.26959" y="-32.057457" text-align="end" class="stylemap3" onclick="sst(1403)" xml:space="preserve"><tspan x="310.26959" y="-32.057457" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Коптево</tspan></text>
                      <text id="m_lbl1404" x="347.11783" y="-50.580196" text-align="end" class="stylemap3" onclick="sst(1404)" xml:space="preserve"><tspan x="347.11783" y="-50.580196" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Лихоборы</tspan></text>
                    </g>
                    <text id="m_lbl1021" x="400.55862" y="-69.102936" dominant-baseline="auto" stroke-width="2" text-align="end" text-anchor="end" class="stylemap1" onclick="sst(1021,1405)" xml:space="preserve"><tspan x="400.55862" y="-69.102936" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width="2" text-align="end" text-anchor="end" word-spacing="0px" class="stylemap1">Окружная</tspan></text>
                    <g stroke-width=".26458">
                      <g>
                        <text id="m_lbl922" x="483.12958" y="-78.627396" class="stylemap3" onclick="sst(922,1406)" xml:space="preserve"><tspan x="483.12958" y="-78.627396" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Владыкино</tspan></text>
                        <text id="m_lbl621" x="605.1745" y="-57.957466" class="stylemap3" onclick="sst(621,1407)" xml:space="preserve"><tspan x="605.1745" y="-57.957466" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Ботанический сад</tspan></text>
                        <text id="m_lbl1408" x="654.94055" y="-35.624519" class="stylemap3" onclick="sst(1408)" xml:space="preserve"><tspan x="654.94055" y="-35.624519" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Ростокино</tspan></text>
                        <text id="m_lbl1409" x="691.33728" y="-13.291574" class="stylemap3" onclick="sst(1409)" xml:space="preserve"><tspan x="691.33728" y="-13.291574" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Белокаменная</tspan></text>
                        <text id="m_lbl723" x="159.19728" y="-107.56995" class="stylemap3" onclick="sst(723)" xml:space="preserve"><tspan x="159.19728" y="-107.56995" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Планерная</tspan></text>
                        <text id="m_lbl722" x="159.19728" y="-79.00412" class="stylemap3" onclick="sst(722)" xml:space="preserve"><tspan x="159.19728" y="-79.00412" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Сходненская</tspan></text>
                        <text id="m_lbl721" x="159.19728" y="-50.43829" class="stylemap3" onclick="sst(721)" xml:space="preserve"><tspan x="159.19728" y="-50.43829" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Тушинская</tspan></text>
                        <text id="m_lbl720" x="159.19728" y="-21.872461" class="stylemap3" onclick="sst(720)" xml:space="preserve"><tspan x="159.19728" y="-21.872461" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Спартак</tspan></text>
                        <text id="m_lbl719" x="159.26099" y="6.693368" class="stylemap3" onclick="sst(719)" xml:space="preserve"><tspan x="159.26099" y="6.693368" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Щукинская</tspan></text>
                        <text id="m_lbl707" x="820.21277" y="464.74786" class="stylemap3" onclick="sst(707)" xml:space="preserve"><tspan x="820.21277" y="464.74786" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Текстильщики</tspan></text>
                        <text id="m_lbl706" x="841.20227" y="505.60577" class="stylemap3" onclick="sst(706)" xml:space="preserve"><tspan x="841.20227" y="505.60577" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Кузьминки</tspan></text>
                        <text id="m_lbl705" x="841.20227" y="547.172" class="stylemap2" onclick="sst(705)" xml:space="preserve"><tspan x="841.20227" y="547.172" class="stylemap2">Рязанский</tspan><tspan x="841.20227" y="557.83868" class="stylemap2">проспект</tspan></text>
                        <text id="m_lbl704" x="841.20227" y="599.19141" class="stylemap3" onclick="sst(704)" xml:space="preserve"><tspan x="841.20227" y="599.19141" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Выхино</tspan></text>
                        <text id="m_lbl703" x="841.20227" y="640.46313" class="stylemap2" onclick="sst(703)" xml:space="preserve"><tspan x="841.20227" y="640.46313" class="stylemap2">Лермонтовский</tspan><tspan x="841.20227" y="651.12982" class="stylemap2">проспект</tspan></text>
                        <text id="m_lbl702" x="841.20227" y="691.11035" class="stylemap3" onclick="sst(702)" xml:space="preserve"><tspan x="841.20227" y="691.11035" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Жулебино</tspan></text>
                        <text id="m_lbl701" x="841.20227" y="732.57245" class="stylemap3" onclick="sst(701)" xml:space="preserve"><tspan x="841.20227" y="732.57245" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Котельники</tspan></text>
                        <text id="m_lbl1009" x="715.58319" y="567.66034" class="stylemap3" onclick="sst(1009)" xml:space="preserve"><tspan x="715.58319" y="567.66034" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Кожуховская</tspan></text>
                        <text id="m_lbl1008" x="715.58319" y="604.06171" class="stylemap3" onclick="sst(1008)" xml:space="preserve"><tspan x="715.58319" y="604.06171" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Печатники</tspan></text>
                        <text id="m_lbl1007" x="715.58319" y="640.46313" class="stylemap3" onclick="sst(1007)" xml:space="preserve"><tspan x="715.58319" y="640.46313" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Волжская</tspan></text>
                        <text id="m_lbl1006" x="715.58319" y="676.8645" class="stylemap3" onclick="sst(1006)" xml:space="preserve"><tspan x="715.58319" y="676.8645" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Люблино</tspan></text>
                        <text id="m_lbl1005" x="715.58319" y="713.26587" class="stylemap3" onclick="sst(1005)" xml:space="preserve"><tspan x="715.58319" y="713.26587" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Братиславская</tspan></text>
                        <text id="m_lbl1004" x="715.58319" y="749.6673" class="stylemap3" onclick="sst(1004)" xml:space="preserve"><tspan x="715.58319" y="749.6673" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Марьино</tspan></text>
                        <text id="m_lbl1003" x="715.58319" y="786.06866" class="stylemap3" onclick="sst(1003)" xml:space="preserve"><tspan x="715.58319" y="786.06866" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Борисово</tspan></text>
                        <text id="m_lbl1002" x="715.58319" y="822.47009" class="stylemap3" onclick="sst(1002)" xml:space="preserve"><tspan x="715.58319" y="822.47009" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Шипиловская</tspan></text>
                        <text id="m_lbl1001" x="715.58319" y="858.87146" class="stylemap3" onclick="sst(1001)" xml:space="preserve"><tspan x="715.58319" y="858.87146" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Зябликово</tspan></text>
                        <text id="m_lbl209" x="590.02783" y="637.2442" class="stylemap3" onclick="sst(209)" xml:space="preserve"><tspan x="590.02783" y="637.2442" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Технопарк</tspan></text>
                        <text id="m_lbl208" x="590.02783" y="672.92004" class="stylemap3" onclick="sst(208)" xml:space="preserve"><tspan x="590.02783" y="672.92004" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Коломенская</tspan></text>
                        <text id="m_lbl207" x="590.02783" y="708.59595" class="stylemap3" onclick="sst(207)" xml:space="preserve"><tspan x="590.02783" y="708.59595" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Каширская</tspan></text>
                        <text id="m_lbl206" x="590.02783" y="744.27179" class="stylemap3" onclick="sst(206)" xml:space="preserve"><tspan x="590.02783" y="744.27179" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Кантемировская</tspan></text>
                        <text id="m_lbl205" x="590.02783" y="779.94763" class="stylemap3" onclick="sst(205)" xml:space="preserve"><tspan x="590.02783" y="779.94763" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Царицыно</tspan></text>
                        <text id="m_lbl204" x="590.02783" y="815.62347" class="stylemap3" onclick="sst(204)" xml:space="preserve"><tspan x="590.02783" y="815.62347" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Орехово</tspan></text>
                        <text id="m_lbl203" x="590.02783" y="851.29938" class="stylemap3" onclick="sst(203)" xml:space="preserve"><tspan x="590.02783" y="851.29938" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Домодедовская</tspan></text>
                      </g>
                      <text id="m_lbl202" x="698.13904" y="886.97522" text-align="end" text-anchor="end" class="stylemap3" onclick="sst(202)" xml:space="preserve"><tspan x="698.13904" y="886.97522" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Красногвардейская</tspan></text>
                      <g>
                        <text id="m_lbl201" x="772.03876" y="886.97522" class="stylemap3" onclick="sst(201)" xml:space="preserve"><tspan x="772.03876" y="886.97522" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Алма-Атинская</tspan></text>
                        <text id="m_lbl810" x="87.806328" y="457.18292" class="stylemap3" onclick="sst(810)" xml:space="preserve"><tspan x="87.806328" y="457.18292" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Минская</tspan></text>
                        <text id="m_lbl809" x="87.806328" y="485.12204" class="stylemap2" onclick="sst(809)" xml:space="preserve"><tspan x="87.806328" y="485.12204" class="stylemap2">Ломоносовский</tspan><tspan x="87.806328" y="495.7887" class="stylemap2">проспект</tspan></text>
                        <text id="m_lbl808" x="87.806328" y="525.68616" class="stylemap3" onclick="sst(808)" xml:space="preserve"><tspan x="87.806328" y="525.68616" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Раменки</tspan></text>
                        <text id="m_lbl321" x="47.766666" y="21.028479" class="stylemap3" onclick="sst(321)" xml:space="preserve"><tspan x="47.766666" y="21.028479" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Митино</tspan></text>
                        <text id="m_lbl320" x="47.766666" y="46.735401" class="stylemap3" onclick="sst(320)" xml:space="preserve"><tspan x="47.766666" y="46.735401" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Волоколамская</tspan></text>
                        <text id="m_lbl319" x="47.702988" y="72.442322" class="stylemap3" onclick="sst(319)" xml:space="preserve"><tspan x="47.702988" y="72.442322" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Мякинино</tspan></text>
                        <text id="m_lbl318" x="47.702988" y="98.149246" class="stylemap3" onclick="sst(318)" xml:space="preserve"><tspan x="47.702988" y="98.149246" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Строгино</tspan></text>
                        <text id="m_lbl317" x="47.702988" y="123.85617" class="stylemap3" onclick="sst(317)" xml:space="preserve"><tspan x="47.702988" y="123.85617" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Крылатское</tspan></text>
                        <text id="m_lbl316" x="47.702988" y="149.5631" class="stylemap3" onclick="sst(316)" xml:space="preserve"><tspan x="47.702988" y="149.5631" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Молодёжная</tspan></text>
                        <text id="m_lbl315" x="47.702988" y="175.27002" class="stylemap3" onclick="sst(315,411)" xml:space="preserve"><tspan x="47.702988" y="175.27002" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Кунцевская</tspan></text>
                        <text id="m_lbl313" x="87.806328" y="427.28546" class="stylemap2" onclick="sst(313, 811)" xml:space="preserve"><tspan x="87.806328" y="427.28546" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Парк Победы</tspan></text>
                        <text id="m_lbl410" x="60.494659" y="213.01793" class="stylemap3" onclick="sst(410)" xml:space="preserve"><tspan x="60.494659" y="213.01793" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Пионерская</tspan></text>
                        <text id="m_lbl409" x="60.494659" y="236.59857" class="stylemap2" onclick="sst(409)" xml:space="preserve"><tspan x="60.494659" y="236.59857" class="stylemap2">Филёвский</tspan><tspan x="60.494659" y="247.26524" class="stylemap2">парк</tspan></text>
                        <text id="m_lbl408" x="60.494659" y="334.16492" class="stylemap3" onclick="sst(408)" xml:space="preserve"><tspan x="60.494659" y="334.16492" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Багратионовская</tspan></text>
                        <text id="m_lbl407" x="60.494659" y="357.74557" class="stylemap3" onclick="sst(407)" xml:space="preserve"><tspan x="60.494659" y="357.74557" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Фили</tspan></text>
                      </g>
                      <text id="m_lbl413" x="133.56221" y="270.88342" text-align="end" text-anchor="end" class="stylemap3" onclick="sst(413)" xml:space="preserve"><tspan x="133.56221" y="270.88342" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Международная</tspan></text>
                      <g>
                        <text id="m_lbl222" x="270.69156" y="-102.65565" class="stylemap3" onclick="sst(222)" xml:space="preserve"><tspan x="270.69156" y="-102.65565" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Речной вокзал</tspan></text>
                        <text id="m_lbl221" x="270.69156" y="-76.617928" class="stylemap3" onclick="sst(221)" xml:space="preserve"><tspan x="270.69156" y="-76.617928" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Водный стадион</tspan></text>
                        <text id="m_lbl219" x="270.75528" y="28.005173" class="stylemap3" onclick="sst(219)" xml:space="preserve"><tspan x="270.75528" y="28.005173" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Сокол</tspan></text>
                      </g>
                    </g>
                  </g>
                  <g transform="translate(-4)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px" onclick="sst(128)">
                    <text id="m_lbl218-7" x="274.75528" y="58.390995"  fill="#ffffff" stroke="#ffffff" stroke-width="2" class="stylemap3" onclick="sst(218)" xml:space="preserve"><tspan x="274.75528" y="58.390995" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke="#ffffff" stroke-width="2" class="stylemap4">Аэропорт</tspan></text>
                    <text id="m_lbl218" x="274.75528" y="58.390995" fill="#000000" stroke-width=".26458" class="stylemap3" onclick="" xml:space="preserve"><tspan x="274.75528" y="58.390995" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Аэропорт</tspan></text>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <g>
                      <text id="m_lbl217" x="284.96222" y="106.74691" class="stylemap3" onclick="sst(217)" xml:space="preserve"><tspan x="284.96222" y="106.74691" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Динамо</tspan></text>
                      <text id="m_lbl925" x="493.68021" y="-169.95184" class="stylemap3" onclick="sst(925)" xml:space="preserve"><tspan x="493.68021" y="-169.95184" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Алтуфьево</tspan></text>
                      <text id="m_lbl924" x="493.68021" y="-139.51036" class="stylemap3" onclick="sst(924)" xml:space="preserve"><tspan x="493.68021" y="-139.51036" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Бибирево</tspan></text>
                      <text id="m_lbl923" x="493.68021" y="-109.06888" class="stylemap3" onclick="sst(923)" xml:space="preserve"><tspan x="493.68021" y="-109.06888" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Отрадное</tspan></text>
                      <text id="m_lbl624" x="605.1745" y="-154.73114" class="stylemap3" onclick="sst(624)" xml:space="preserve"><tspan x="605.1745" y="-154.73114" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Медведково</tspan></text>
                      <text id="m_lbl623" x="605.1745" y="-122.54479" class="stylemap3" onclick="sst(623)" xml:space="preserve"><tspan x="605.1745" y="-122.54479" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Бабушкинская</tspan></text>
                      <text id="m_lbl622" x="605.1745" y="-90.358452" class="stylemap3" onclick="sst(622)" xml:space="preserve"><tspan x="605.1745" y="-90.358452" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Свиблово</tspan></text>
                      <text id="m_lbl301" x="841.13861" y="-4.6784835" class="stylemap3" onclick="sst(301)" xml:space="preserve"><tspan x="841.13861" y="-4.6784835" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Щёлковская</tspan></text>
                      <text id="m_lbl302" x="841.13861" y="29.866837" class="stylemap3" onclick="sst(302)" xml:space="preserve"><tspan x="841.13861" y="29.866837" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Первомайская</tspan></text>
                      <text id="m_lbl303" x="841.13861" y="64.412155" class="stylemap3" onclick="sst(303)" xml:space="preserve"><tspan x="841.13861" y="64.412155" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Измайловская</tspan></text>
                    </g>
                    <text id="m_lbl1014" x="572.80591" y="144.69585"  text-align="center" text-anchor="middle" class="stylemap2" onclick="sst(1014)" xml:space="preserve"><tspan x="572.80591" y="144.69585" text-align="center" class="stylemap2">Сретенский</tspan><tspan x="572.80591" y="155.36252" text-align="center" class="stylemap2">бульвар</tspan></text>
                  </g>
                  <g id="m_lbl108" transform="translate(-4)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px" onclick="sst(108)">
                    <text x="217.36168" y="516.7431"  fill="#ffffff" stroke="#ffffff" stroke-width="2" class="stylemap3" onclick="" xml:space="preserve"><tspan x="217.36168" y="516.7431" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke="#ffffff" stroke-width="2" class="stylemap4">Спортивная</tspan></text>
                    <text x="217.36168" y="516.7431" fill="#000000" stroke-width=".26458" class="stylemap3" onclick="" xml:space="preserve"><tspan x="217.36168" y="516.7431" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Спортивная</tspan></text>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text id="m_lbl109" x="222.77521" y="440.53497" class="stylemap3" onclick="sst(109)" xml:space="preserve"><tspan x="222.77521" y="440.53497" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Фрунзенская</tspan></text>
                    <text id="m_lbl110" x="304.51395" y="384.69278" text-align="end" text-anchor="end" class="stylemap2" onclick="sst(110,510)" xml:space="preserve"><tspan x="304.51395" y="384.69278" text-align="end" class="stylemap2">Парк</tspan><tspan x="304.51395" y="395.35944" text-align="end" class="stylemap2">культуры</tspan></text>
                    <text id="m_lbl111" x="366.13876" y="384.69278" text-align="center" text-anchor="middle" class="stylemap3" onclick="sst(111)" xml:space="preserve"><tspan x="366.13876" y="384.69278" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="center" text-anchor="middle" class="stylemap4">Кропоткинская</tspan></text>
                    <g>
                      <text id="m_lbl112" x="427.23099" y="351.3858" class="stylemap2" onclick="sst(112)" xml:space="preserve"><tspan x="427.23099" y="351.3858" class="stylemap2">Библиотека</tspan><tspan x="427.23099" y="362.05246" class="stylemap2">имени Ленина</tspan></text>
                      <text id="m_lbl213" x="502.53391" y="285.2829" class="stylemap3" onclick="sst(213)" xml:space="preserve"><tspan x="502.53391" y="285.2829" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Театральная</tspan></text>
                      <text id="m_lbl122" x="713.92786" y="9.0413723" class="stylemap2" onclick="sst(122,1410)" xml:space="preserve"><tspan x="713.92786" y="9.0413723" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Бульвар Рокоссовского</tspan></text>
                      <text id="m_lbl118" x="666.42926" y="115.68718" class="stylemap3" onclick="sst(118)" xml:space="preserve"><tspan x="666.42926" y="115.68718" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Красносельская</tspan></text>
                      <text id="m_lbl119" x="687.80426" y="94.404099" class="stylemap3" onclick="sst(119)" xml:space="preserve"><tspan x="687.80426" y="94.404099" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Сокольники</tspan></text>
                    </g>
                    <text id="m_lbl121" x="711.05927" y="43.197224" text-align="end" text-anchor="end" class="stylemap3" onclick="sst(121)" xml:space="preserve"><tspan x="711.05927" y="43.197224" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Черкизовская</tspan></text>
                    <text id="m_lbl212" x="590.02789" y="365.51089" class="stylemap3" onclick="sst(212)" xml:space="preserve"><tspan x="590.02789" y="365.51089" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Новокузнецкая</tspan></text>
                    <text id="m_lbl113" x="477.6969" y="262.76489" text-align="end" text-anchor="end" class="stylemap2" onclick="sst(113)" xml:space="preserve"><tspan x="477.6969" y="262.76489" text-align="end" class="stylemap2">Охотный</tspan><tspan x="477.6969" y="273.43155" text-align="end" class="stylemap2">Ряд</tspan></text>
                    <text id="m_lbl215" x="354.88046" y="169.98068" class="stylemap3" onclick="sst(215)" xml:space="preserve"><tspan x="354.88046" y="169.98068" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Маяковская</tspan></text>
                    <text id="m_lbl214" x="406.64371" y="252.60573" text-align="end" text-anchor="end" class="stylemap2" onclick="sst(214)" xml:space="preserve"><tspan x="406.64371" y="252.60573" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap2">Тверская</tspan></text>
                    <text id="m_lbl304" x="809.20557" y="109.67135" class="stylemap3" onclick="sst(304)" xml:space="preserve"><tspan x="809.20557" y="109.67135" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Партизанская</tspan></text>
                    <text id="m_lbl307" x="726.65289" y="198.14088" class="stylemap3" onclick="sst(307)" xml:space="preserve"><tspan x="726.65289" y="198.14088" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Бауманская</tspan></text>
                  </g>
                  <g id="m_lbl306" transform="translate(4.8564 -7.6577)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px" onclick="sst(306)">
                    <text x="746.38086" y="181.40974"  fill="#ffffff" stroke="#ffffff" stroke-width="2" class="stylemap3" onclick="" xml:space="preserve"><tspan x="746.38086" y="181.40974" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke="#ffffff" stroke-width="2" class="stylemap4">Электрозаводская</tspan></text>
                    <text x="746.38086" y="181.40974" fill="#000000" stroke-width=".26458" class="stylemap3" onclick="" xml:space="preserve"><tspan x="746.38086" y="181.40974" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Электрозаводская</tspan></text>
                  </g>
                  <g transform="translate(7.4378 -11.313)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px">
                    <text x="767.27466" y="161.63454"  fill="#ffffff" stroke="#ffffff" stroke-width="2" class="stylemap3" onclick="sst(305)" xml:space="preserve"><tspan x="767.27466" y="161.63454" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke="#ffffff" stroke-width="2" class="stylemap4">Семёновская</tspan></text>
                    <text x="767.27466" y="161.63454" fill="#000000" stroke-width=".26458" class="stylemap3" onclick="sst(305)" xml:space="preserve"><tspan x="767.27466" y="161.63454" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Семёновская</tspan></text>
                  </g>
                  <g font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px">
                    <text id="m_lbl310" x="403.97879" y="297.87592" dominant-baseline="auto" fill="#0078bf" stroke="#ffffff" stroke-width="2" class="stylemap1" onclick="sst(310)" xml:space="preserve"><tspan x="403.97879" y="297.87592" dominant-baseline="auto" fill="#0078bf" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Арбатская</tspan></text>
                    <g stroke-width=".26458">
                      <text id="m_lbl311" x="330.84937" y="297.87592" fill="#0078bf" text-align="center" text-anchor="middle" class="stylemap2" onclick="sst(311)" xml:space="preserve"><tspan x="330.84937" y="297.87592" fill="#0078bf" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="center" text-anchor="middle" class="stylemap2">Смоленская</tspan></text>
                      <text id="m_lbl314" x="60.494659" y="427.28555" fill="#000000" text-align="end" text-anchor="end" class="stylemap2" onclick="sst(314)" xml:space="preserve"><tspan x="60.494659" y="427.28555" text-align="end" class="stylemap2">Славянский</tspan><tspan x="60.494659" y="437.95221" text-align="end" class="stylemap2">бульвар</tspan></text>
                      <text id="m_lbl403" x="330.84937" y="271.25516" fill="#00c0ff" text-align="center" text-anchor="middle" class="stylemap2" onclick="sst(403)" xml:space="preserve"><tspan x="330.84937" y="271.25516" fill="#00c0ff" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="center" text-anchor="middle" class="stylemap2">Смоленская</tspan></text>
                    </g>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text id="m_lbl412" x="189.69154" y="271.25516" class="stylemap3" onclick="sst(412)" xml:space="preserve"><tspan x="189.69154" y="271.25516" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Выставочная</tspan></text>
                    <text id="m_lbl322" x="47.766666" y="-4.6784458" class="stylemap3" onclick="sst(322)" xml:space="preserve"><tspan x="47.766666" y="-4.6784458" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Пятницкое шоссе</tspan></text>
                    <text id="m_lbl509" x="352.35947" y="444.99384" text-align="end" text-anchor="end" class="stylemap2" onclick="sst(509,612)" xml:space="preserve"><tspan x="352.35947" y="444.99384" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap2">Октябрьская</tspan></text>
                    <text id="m_lbl610" x="338.91702" y="566.52911" class="stylemap2" onclick="sst(610)" xml:space="preserve"><tspan x="338.91702" y="566.52911" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Ленинский проспект</tspan></text>
                    <text id="m_lbl611" x="338.91702" y="505.76147" class="stylemap3" onclick="sst(611)" xml:space="preserve"><tspan x="338.91702" y="505.76147" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Шаболовская</tspan></text>
                    <text id="m_lbl615" x="551.42719" y="187.81995" text-align="end" text-anchor="end" class="stylemap3" onclick="sst(615)" xml:space="preserve"><tspan x="551.42719" y="187.81995" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Тургеневская</tspan></text>
                    <g>
                      <text id="m_lbl616" x="548.80695" y="124.35354" class="stylemap3" onclick="sst(616)" xml:space="preserve"><tspan x="548.80695" y="124.35354" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Сухаревская</tspan></text>
                      <text id="m_lbl618" x="593.87115" y="60.414078" class="stylemap3" onclick="sst(618)" xml:space="preserve"><tspan x="593.87115" y="60.414078" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Рижская</tspan></text>
                      <text id="m_lbl619" x="605.1745" y="17.980455" class="stylemap3" onclick="sst(619)" xml:space="preserve"><tspan x="605.1745" y="17.980455" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Алексеевская</tspan></text>
                      <text id="m_lbl620" x="605.1745" y="-14.420546" class="stylemap3" onclick="sst(620)" xml:space="preserve"><tspan x="605.1745" y="-14.420546" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">ВДНХ</tspan></text>
                      <text id="m_lbl902" x="464.53616" y="886.97522" class="stylemap3" onclick="sst(902)" xml:space="preserve"><tspan x="464.53616" y="886.97522" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Аннино</tspan></text>
                      <text id="m_lbl901" x="464.47247" y="910.55585" class="stylemap2" onclick="sst(901)" xml:space="preserve"><tspan x="464.47247" y="910.55585" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Бульвар Дмитрия Донского</tspan></text>
                      <text id="m_lbl101" transform="scale(.99999 1)" x="213.36371" y="743.38824" class="stylemap3" onclick="sst(101)" xml:space="preserve"><tspan x="213.36371" y="743.38824" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Саларьево</tspan></text>
                      <text id="m_lbl102" x="213.36168" y="714.47662" class="stylemap3" onclick="sst(102)" xml:space="preserve"><tspan x="213.36168" y="714.47662" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Румянцево</tspan></text>
                      <text id="m_lbl103" x="213.36168" y="685.77161" class="stylemap3" onclick="sst(103)" xml:space="preserve"><tspan x="213.36168" y="685.77161" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Тропарёво</tspan></text>
                      <text id="m_lbl104" x="213.425" y="657.46759" class="stylemap3" onclick="sst(104)" xml:space="preserve"><tspan x="213.425" y="657.46759" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Юго-Западная</tspan></text>
                      <text id="m_lbl105" x="213.425" y="617.9917" class="stylemap2" onclick="sst(105)" xml:space="preserve"><tspan x="213.425" y="617.9917" class="stylemap2">Проспект</tspan><tspan x="213.425" y="628.65839" class="stylemap2">Вернадского</tspan></text>
                    </g>
                  </g>
                  <text id="m_lbl1102" x="517.22931" y="728.55365"  fill="#e6e6e6" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" text-align="center" text-anchor="middle" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="517.22931" y="728.55365" fill="#e6e6e6" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="center" text-anchor="middle" class="stylemap4">Варшавская</tspan></text>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px">
                    <g stroke-width=".26458">
                      <text id="m_lbl911" x="464.47247" y="548.56683"  class="stylemap3" onclick="sst(911)" xml:space="preserve"><tspan x="464.47247" y="548.56683" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Тульская</tspan></text>
                      <text id="m_lbl912" x="464.47247" y="496.55435"  class="stylemap3" onclick="sst(912)" xml:space="preserve"><tspan x="464.47247" y="496.55435" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Серпуховская</tspan></text>
                      <text id="m_lbl914" x="374.04138" y="329.27246"  text-align="end" text-anchor="end" class="stylemap3" onclick="sst(914)" xml:space="preserve"><tspan x="374.04138" y="329.27246" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Боровицкая</tspan></text>
                      <text id="m_lbl1201" x="350.74628" y="886.97522"  text-align="end" text-anchor="end" class="stylemap3" onclick="sst(1201)" xml:space="preserve"><tspan x="350.74628" y="886.97522" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Битцевский парк</tspan></text>
                      <text id="m_lbl1202" x="393.62677" y="886.97522"  text-align="center" text-anchor="middle" class="stylemap3" onclick="sst(1202)" xml:space="preserve"><tspan x="393.62677" y="886.97522" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="center" text-anchor="middle" class="stylemap4">Лесопарковая</tspan></text>
                      <text id="m_lbl1203" x="426.47241" y="910.55585"  text-align="end" text-anchor="end" class="stylemap3" onclick="sst(1203)" xml:space="preserve"><tspan x="426.47241" y="910.55585" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Улица Старокачаловская</tspan></text>
                      <g>
                        <text id="m_lbl1204" transform="scale(.99999 1)" x="396.84799" y="948.11249"  class="stylemap2" onclick="sst(1204)" xml:space="preserve"><tspan x="396.84799" y="948.11249" class="stylemap2">Улица</tspan><tspan x="396.84799" y="958.77917" class="stylemap2">Скобелевская</tspan></text>
                        <text id="m_lbl1205" transform="scale(.99999 1)" x="329.83215" y="948.11249"  class="stylemap2" onclick="sst(1205)" xml:space="preserve"><tspan x="329.83215" y="948.11249" class="stylemap2">Бульвар</tspan><tspan x="329.83215" y="958.77917" class="stylemap2">Адмирала</tspan><tspan x="329.83215" y="969.4458" class="stylemap2">Ушакова</tspan></text>
                        <text id="m_lbl1206" transform="scale(.99999 1)" x="262.81628" y="948.11249"  class="stylemap2" onclick="sst(1206)" xml:space="preserve"><tspan x="262.81628" y="948.11249" class="stylemap2">Улица</tspan><tspan x="262.81628" y="958.77917" class="stylemap2">Горчакова</tspan></text>
                        <text id="m_lbl1207" transform="scale(.99999 1)" x="195.80049" y="948.11249"  class="stylemap2" onclick="sst(1207)" xml:space="preserve"><tspan x="195.80049" y="948.11249" class="stylemap2">Бунинская</tspan><tspan x="195.80049" y="958.77917" class="stylemap2">аллея</tspan></text>
                      </g>
                    </g>
                    <text x="732.92401" y="32.284859" class="stylemap3" xml:space="preserve"><tspan x="732.92401" y="41.618195"></tspan><tspan x="732.92401" y="54.951523"></tspan></text>
                    <g stroke-width=".26458">
                      <text id="m_lbl821" x="875.88269" y="256.55923"  class="stylemap3" onclick="sst(821)" xml:space="preserve"><tspan x="875.88269" y="256.55923" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Перово</tspan></text>
                      <text id="m_lbl822" x="894.32294" y="275.35809"  class="stylemap3" onclick="sst(822)" xml:space="preserve"><tspan x="894.32294" y="275.35809" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Новогиреево</tspan></text>
                      <text id="m_lbl823" x="913.85919" y="294.15698"  class="stylemap3" onclick="sst(823)" xml:space="preserve"><tspan x="913.85919" y="294.15698" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Новокосино</tspan></text>
                      <text id="m_lbl818" x="764.01141" y="299.07538"  class="stylemap2" onclick="sst(818)" xml:space="preserve"><tspan x="764.01141" y="299.07538" class="stylemap2">Площадь</tspan><tspan x="764.01141" y="309.74203" class="stylemap2">Ильича</tspan></text>
                    </g>
                  </g>
                  <g id="m_lbl1012" transform="translate(-4)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" text-anchor="end" word-spacing="0px" onclick="sst(1012)">
                    <text x="741.58032" y="286.57666"  fill="#ffffff" stroke="#ffffff" stroke-width="2" text-align="end" class="stylemap3" onclick="" xml:space="preserve"><tspan x="741.58032" y="286.57666" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke="#ffffff" stroke-width="2" text-align="end" text-anchor="end" class="stylemap4">Римская</tspan></text>
                    <text x="741.58032" y="286.57666"  fill="#000000" stroke-width=".26458" text-align="end" class="stylemap3" onclick="" xml:space="preserve"><tspan x="741.58032" y="286.57666" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Римская</tspan></text>
                  </g>
                  <text id="m_lbl1015" x="493.68021" y="150.44281"  fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px" class="stylemap2" onclick="sst(1015)" xml:space="preserve"><tspan x="493.68021" y="150.44281" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap2">Трубная</tspan></text>
                  <g id="m_lbl1011" transform="translate(-2.5811 -61.107)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" text-anchor="end" word-spacing="0px" onclick="sst(1011)">
                    <text x="731.67236" y="478.79944" dominant-baseline="auto"  fill="#ffffff" stroke-width="2" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:markers stroke fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="731.67236" y="478.79944" dominant-baseline="auto" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:markers stroke fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Крестьянская</tspan><tspan x="731.67236" y="489.46609" dominant-baseline="auto" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:markers stroke fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">застава</tspan></text>
                    <text x="731.67236" y="478.79944" dominant-baseline="auto"  fill="#000000" stroke-width="0" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:markers stroke fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="731.67236" y="478.79944" dominant-baseline="auto" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:markers stroke fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Крестьянская</tspan><tspan x="731.67236" y="489.46609" dominant-baseline="auto" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:markers stroke fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">застава</tspan></text>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text id="m_lbl913" x="464.47247" y="439.75055"  class="stylemap3" onclick="sst(913)" xml:space="preserve"><tspan x="464.47247" y="439.75055" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Полянка</tspan></text>
                    <g text-anchor="end">
                      <text id="m_lbl716" x="227.44986" y="206.04256"  text-align="end" class="stylemap3" onclick="sst(716)" xml:space="preserve"><tspan x="227.44986" y="206.04256" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Беговая</tspan></text>
                      <text id="m_lbl715" x="248.72714" y="226.76572"  text-align="end" class="stylemap2" onclick="sst(715)" xml:space="preserve"><tspan x="248.72714" y="226.76572" text-align="end" class="stylemap2">Улица</tspan><tspan x="248.72714" y="237.43239" text-align="end" class="stylemap2">1905 года</tspan></text>
                      <text id="m_lbl216" x="310.58429" y="158.86504"  text-align="end" class="stylemap3" onclick="sst(216,501)" xml:space="preserve"><tspan x="310.58429" y="158.86504" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Белорусская</tspan></text>
                    </g>
                    <g>
                      <text id="m_lbl1016" x="493.69476" y="67.156357"  class="stylemap3" onclick="sst(1016)" xml:space="preserve"><tspan x="493.69476" y="67.156357" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Достоевская</tspan></text>
                      <text id="m_lbl1017" x="493.74387" y="36.564178"  class="stylemap3" onclick="sst(1017)" xml:space="preserve"><tspan x="493.74387" y="36.564178" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Марьина Роща</tspan></text>
                      <text id="m_lbl1018" x="493.74387" y="5.9720001"  class="stylemap3" onclick="sst(1018)" xml:space="preserve"><tspan x="493.74387" y="5.9720001" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Бутырская</tspan></text>
                      <text id="m_lbl915" x="436.87314" y="244.12964"  class="stylemap3" onclick="sst(915)" xml:space="preserve"><tspan x="436.87314" y="244.12964" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Чеховская</tspan></text>
                      <text id="m_lbl114" x="522.2533" y="254.2305"  class="stylemap3" onclick="sst(114)" xml:space="preserve"><tspan x="522.2533" y="254.2305" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Лубянка</tspan></text>
                    </g>
                    <text id="m_lbl712" x="540.84296" y="211.24841"  text-align="end" text-anchor="end" class="stylemap3" onclick="sst(712)" xml:space="preserve"><tspan x="540.84296" y="211.24841" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Кузнецкий Мост</tspan></text>
                    <text id="m_lbl916" x="460.18253" y="168.1722"  text-align="end" text-anchor="end" class="stylemap2" onclick="sst(916)" xml:space="preserve"><tspan x="460.18253" y="168.1722" text-align="end" class="stylemap2">Цветной</tspan><tspan x="460.18253" y="178.83887" text-align="end" class="stylemap2">бульвар</tspan></text>
                    <text id="m_lbl713" x="417.96301" y="211.24841"  text-align="center" text-anchor="middle" class="stylemap2" onclick="sst(713)" xml:space="preserve"><tspan x="417.96301" y="211.24841" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="center" text-anchor="middle" class="stylemap2">Пушкинская</tspan></text>
                    <g>
                      <text id="m_lbl918" x="390.91138" y="67.156326"  class="stylemap3" onclick="sst(918,854,1115)" xml:space="preserve"><tspan x="390.91138" y="67.156326" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Савёловская</tspan></text>
                      <text id="m_lbl919" x="382.18591" y="36.543854"  class="stylemap3" onclick="sst(919)" xml:space="preserve"><tspan x="382.18591" y="36.543854" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Дмитровская</tspan></text>
                      <text id="m_lbl920" x="400.47894" y="5.9313831"  class="stylemap3" onclick="sst(920)" xml:space="preserve"><tspan x="400.47894" y="5.9313831" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Тимирязевская</tspan></text>
                      <text id="m_lbl921" x="453.63882" y="-48.470055"  class="stylemap3" onclick="sst(921,1020)" xml:space="preserve"><tspan x="453.63882" y="-48.470055" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Петровско-Разумовская</tspan></text>
                    </g>
                  </g>
                  <g id="m_lbl210" transform="translate(-4)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px" onclick="sst(210)">
                    <text x="594.02783" y="577.93347"  fill="#ffffff" stroke="#ffffff" stroke-width="2" class="stylemap3" onclick="" xml:space="preserve"><tspan x="594.02783" y="577.93347" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke="#ffffff" stroke-width="2" class="stylemap4">Автозаводская</tspan></text>
                    <text x="594.02783" y="577.93347"  fill="#000000" stroke-width=".26458" class="stylemap3" onclick="" xml:space="preserve"><tspan x="594.02783" y="577.93347" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Автозаводская</tspan></text>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
                    <text id="m_lbl714" x="301.50336" y="211.24841"  class="stylemap3" onclick="sst(714)" xml:space="preserve"><tspan x="301.50336" y="211.24841" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Баррикадная</tspan></text>
                    <text id="m_lbl1013" x="648.39001" y="222.39381"  text-align="end" text-anchor="end" class="stylemap3" onclick="sst(1013)" xml:space="preserve"><tspan x="648.39001" y="222.39381" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Чкаловская</tspan></text>
                    <text id="m_lbl1019" x="481.51175" y="-21.249027"  class="stylemap3" onclick="sst(1019)" xml:space="preserve"><tspan x="481.51175" y="-21.249027" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Фонвизинская</tspan></text>
                    <text id="m_lbl1419" x="679.65967" y="553.11749"  text-align="end" text-anchor="end" class="stylemap3" onclick="sst(1419)" xml:space="preserve"><tspan x="679.65967" y="553.11749" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Дубровка</tspan></text>
                    <text id="m_lbl1420" x="613.1322" y="608.88806"  class="stylemap3" onclick="sst(1420)" xml:space="preserve"><tspan x="613.1322" y="608.88806" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Автозаводская</tspan></text>
                    <text id="m_lbl224" x="270.69156" y="-154.73111"  class="stylemap3" onclick="sst(224)" xml:space="preserve"><tspan x="270.69156" y="-154.73111" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Ховрино</tspan></text>
                  </g>
                  <text id="m_lbl1101" x="447.25708" y="728.55365"  fill="#e6e6e6" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" stroke-width=".26458" text-align="end" text-anchor="end" word-spacing="0px" class="stylemap3" onclick="" xml:space="preserve"><tspan x="447.25708" y="728.55365" fill="#e6e6e6" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Каховская</tspan></text>
                  <g id="m_lbl709" transform="translate(6.7187 -62.492)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(709)">
                    <text x="747.47443" y="466.64508" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="747.47443" y="466.64508" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Пролетарская</tspan></text>
                    <text x="747.47443" y="466.64508" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="747.47443" y="466.64508" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Пролетарская</tspan></text>
                  </g>
                  <g id="m_lbl708" transform="translate(8.6931 -65.586)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(708)">
                    <text x="772.80048" y="490.39362" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="772.80048" y="490.39362" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Волгоградский проспект</tspan></text>
                    <text x="772.80048" y="490.39362" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="772.80048" y="490.39362" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Волгоградский проспект</tspan></text>
                  </g>
                  <g id="m_lbl817" transform="translate(10.08 -79.249)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(817)">
                    <text x="691.651" y="440.60449" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="691.651" y="440.60449" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Марксистская</tspan></text>
                    <text x="691.651" y="440.60449" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="691.651" y="440.60449" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Марксистская</tspan></text>
                  </g>
                  <g id="m_lbl819" transform="translate(-2.3883 -58.292)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(819)">
                    <text x="793.20685" y="337.79037" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="793.20685" y="337.79037" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Авиамоторная</tspan></text>
                    <text x="793.20685" y="337.79037" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="793.20685" y="337.79037" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Авиамоторная</tspan></text>
                  </g>
                  <text id="m_lbl820" x="811.78125" y="233.85092" dominant-baseline="auto"  fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" text-align="end" text-anchor="end" word-spacing="0px" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="sst(820)" xml:space="preserve"><tspan x="811.78125" y="233.85092" dominant-baseline="auto" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Шоссе</tspan><tspan x="811.78125" y="244.51759" dominant-baseline="auto" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Энтузиастов</tspan></text>
                  <g id="m_lbl308" transform="translate(-1.0012 -60.855)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" word-spacing="0px" onclick="sst(308,505)">
                    <text x="688.14685" y="283.24902" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" stroke-width="1.999" class="stylemap1" onclick="" xml:space="preserve"><tspan x="688.14685" y="283.24902" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="1.999" word-spacing="0px" class="stylemap1">Курская</tspan></text>
                    <text x="688.14685" y="283.24902" dominant-baseline="auto"  fill="#000000" stroke-width="2" class="stylemap1" onclick="" xml:space="preserve"><tspan x="688.14685" y="283.24902" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Курская</tspan></text>
                  </g>
                  <g id="m_lbl120" transform="translate(7.623 -67.398)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(120)">
                    <text x="709.98126" y="131.24187" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="709.98126" y="131.24187" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Преображенская</tspan><tspan x="709.98126" y="141.90854" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">площадь</tspan></text>
                    <text x="709.98126" y="131.24182" dominant-baseline="auto"  fill="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="709.98126" y="131.24182" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Преображенская</tspan><tspan x="709.98126" y="141.90849" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">площадь</tspan></text>
                  </g>
                  <g id="m_lbl220" transform="translate(-6.9596 -61.298)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(220)">
                    <text x="277.65112" y="61.80555" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="277.65112" y="61.80555" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Войковская</tspan></text>
                    <text x="277.65112" y="61.805561" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="277.65112" y="61.805561" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Войковская</tspan></text>
                  </g>
                  <g id="m_lbl718" transform="translate(-11.867 -81.51)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(718)">
                    <text x="168.47662" y="162.53157" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="168.47662" y="162.53157" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Октябрьское</tspan><tspan x="168.47662" y="173.19824" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Поле</tspan></text>
                    <text x="168.47662" y="162.53157" dominant-baseline="auto"  fill="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="168.47662" y="162.53157" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Октябрьское</tspan><tspan x="168.47662" y="173.19824" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Поле</tspan></text>
                  </g>
                  <g id="m_lbl717" transform="translate(-1.2296 -77.701)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(717)">
                    <text x="189.033" y="218.68048" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="189.033" y="218.68048" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Полежаевская</tspan></text>
                    <text x="189.033" y="218.68048" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="189.033" y="218.68048" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Полежаевская</tspan></text>
                  </g>
                  <g id="m_lbl1110" transform="translate(-12.5 -56.061)" onclick="sst(1110)">
                    <text x="182.05577" y="366.40411" dominant-baseline="auto"  fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="182.05577" y="366.40411" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Деловой</tspan><tspan x="182.05577" y="377.07077" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">центр</tspan></text>
                  </g>
                  <g id="m_lbl312" transform="translate(-5.9606 -56.667)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" text-anchor="end" word-spacing="0px" onclick="sst(312,404,511)">
                    <text x="281.03632" y="353.79599" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" text-align="end" class="stylemap1" onclick="" xml:space="preserve"><tspan x="281.03632" y="353.79599" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" text-align="end" text-anchor="end" word-spacing="0px" class="stylemap1">Киевская</tspan></text>
                    <text x="281.03632" y="353.79599" dominant-baseline="auto"  fill="#000000" text-align="end" class="stylemap1" onclick="" xml:space="preserve"><tspan x="281.03632" y="353.79599" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" text-align="end" text-anchor="end" word-spacing="0px" class="stylemap1">Киевская</tspan></text>
                  </g>
                  <g id="m_lbl405" transform="translate(7.6296 -60.561)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(405)">
                    <text x="202.823" y="399.33936" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="202.823" y="399.33936" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Студенческая</tspan></text>
                    <text x="202.823" y="399.33936" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="202.823" y="399.33936" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Студенческая</tspan></text>
                  </g>
                  <g id="m_lbl406" transform="translate(-11.835 -51.494)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(406,1426)">
                    <text x="170.83586" y="421.25336" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="170.83586" y="421.25336" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Кутузовская</tspan></text>
                    <text x="170.83586" y="421.25336" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="170.83586" y="421.25336" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Кутузовская</tspan></text>
                  </g>
                  <g id="m_lbl107" transform="translate(5.1e-6 -18.157)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="1.9994" word-spacing="0px" onclick="sst(107)">
                    <text x="213.36172" y="565.14972" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="213.36172" y="565.14972" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Воробьёвы </tspan><tspan x="213.36172" y="575.81641" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">горы</tspan></text>
                    <text x="213.36172" y="565.14972" dominant-baseline="auto"  fill="#000000" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="213.36172" y="565.14972" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Воробьёвы </tspan><tspan x="213.36172" y="575.81641" dominant-baseline="auto" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">горы</tspan></text>
                  </g>
                  <g id="m_lbl106" transform="translate(-4.38e-5 -6.7546)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="1.9994" word-spacing="0px" onclick="sst(106)">
                    <text x="213.36172" y="594.95758" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="213.36172" y="594.95758" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="1.9994" word-spacing="0px" class="stylemap1">Университет</tspan></text>
                    <text x="213.36172" y="594.95758" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="213.36172" y="594.95758" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="1.9994" word-spacing="0px" class="stylemap1">Университет</tspan></text>
                  </g>
                  <g id="m_lbl613" transform="translate(28.911 -74.222)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" text-anchor="end" word-spacing="0px" onclick="sst(613,816)">
                    <text x="526.0152" y="452.83319" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="526.0152" y="452.83319" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" text-align="end" text-anchor="end" word-spacing="0px" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Третьяковская</tspan></text>
                    <text x="526.0152" y="452.83319" dominant-baseline="auto"  fill="#000000" text-align="end" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="" xml:space="preserve"><tspan x="526.0152" y="452.83319" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" text-align="end" text-anchor="end" word-spacing="0px" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Третьяковская</tspan></text>
                  </g>
                  <g id="m_lbl401" transform="translate(.5296 -58.814)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="1.9994" word-spacing="0px" onclick="sst(401)">
                    <text x="415.25714" y="388.0863" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="415.25714" y="388.0863" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="1.9994" word-spacing="0px" class="stylemap1">Александровский сад</tspan></text>
                    <text x="415.25714" y="388.0863" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="415.25714" y="388.0863" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="1.9994" word-spacing="0px" class="stylemap1">Александровский сад</tspan></text>
                  </g>
                  <g id="m_lbl309" transform="translate(3 -55.061)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(309)">
                    <text x="508.99036" y="375.82126" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="508.99036" y="375.82126" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Площадь Революции</tspan></text>
                    <text x="508.99036" y="375.82126" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="508.99036" y="375.82126" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Площадь Революции</tspan></text>
                  </g>
                  <g id="m_lbl402" transform="translate(4.811 -59.137)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(402)">
                    <text x="369.04962" y="339.96066" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="369.04962" y="339.96066" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Арбатская</tspan></text>
                    <text x="369.04962" y="339.96066" dominant-baseline="auto"  fill="#00c0ff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="369.04962" y="339.96066" dominant-baseline="auto" fill="#00c0ff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Арбатская</tspan></text>
                  </g>
                  <g id="m_lbl614" transform="translate(1.75 -59.561)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(614,711)">
                    <text x="542.18329" y="330.763" fill="#ffffff" stroke="#ffffff" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;line-height:1.25;paint-order:stroke markers fill" onclick="" xml:space="preserve"><tspan x="542.18329" y="330.763" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" stroke="#ffffff" stroke-width="2" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;paint-order:stroke markers fill">Китай-город</tspan></text>
                    <text x="542.18329" y="330.763"  fill="#000000" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;line-height:1.25;paint-order:stroke markers fill" onclick="" xml:space="preserve"><tspan x="542.18329" y="330.763" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" stroke-width="2" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;paint-order:stroke markers fill">Китай-город</tspan></text>
                  </g>
                  <g id="m_lbl115" transform="translate(-4)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(115)">
                    <text x="591.31183" y="194.50253" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="591.31183" y="194.50253" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Чистые пруды</tspan></text>
                    <text x="591.31183" y="194.50253" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="591.31183" y="194.50253" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Чистые пруды</tspan></text>
                  </g>
                  <g id="m_lbl116" transform="translate(-9.9151)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(116)">
                    <text x="626.34613" y="165.76764" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="626.34613" y="165.76764" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Красные ворота</tspan></text>
                    <text x="626.34613" y="165.76764" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="626.34613" y="165.76764" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Красные ворота</tspan></text>
                  </g>
                  <g id="m_lbl917" transform="translate(-9.3977 -56.686)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(917)">
                    <text x="415.49628" y="177.71164" dominant-baseline="auto"  fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="415.49628" y="177.71164" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Менделеевская</tspan></text>
                    <text x="415.49628" y="177.71164" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="415.49628" y="177.71164" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Менделеевская</tspan></text>
                  </g>
                  <g id="m_lbl502" transform="translate(.11398 -61.479)" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" onclick="sst(502)">
                    <text x="424.66507" y="157.26953" dominant-baseline="auto" fill="#ffffff" stroke="#ffffff" class="stylemap1" onclick="" xml:space="preserve"><tspan x="424.66507" y="157.26953" dominant-baseline="auto" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke="#ffffff" stroke-width="2" word-spacing="0px" class="stylemap1">Новослободская</tspan></text>
                    <text x="424.66507" y="157.26953" dominant-baseline="auto"  fill="#000000" class="stylemap1" onclick="" xml:space="preserve"><tspan x="424.66507" y="157.26953" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" class="stylemap1">Новослободская</tspan></text>
                  </g>
                  <g id="m_lbl851" transform="translate(-4)" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" text-anchor="end" word-spacing="0px" onclick="sst(851,1112)">
                    <text x="201.66429" y="185.3194"  fill="#ffffff" stroke="#ffffff" stroke-width="2" text-align="end" class="stylemap3" onclick="" xml:space="preserve"><tspan x="201.66429" y="185.3194" fill="#ffffff" font-family="'Roboto Condensed'" font-size="10.667px" stroke="#ffffff" stroke-width="2" text-align="end" text-anchor="end" class="stylemap4">Хорошёвская</tspan></text>
                    <text x="201.66429" y="185.3194"  fill="#000000" stroke-width=".26458" text-align="end" class="stylemap3" onclick="" xml:space="preserve"><tspan x="201.66429" y="185.3194" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Хорошёвская</tspan></text>
                  </g>
                  <g fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" letter-spacing="0px" word-spacing="0px">
                    <g stroke-width=".26458">
                      <text id="m_lbl852" x="256.25766" y="128.58711"  class="stylemap3" onclick="sst(852,1113)" xml:space="preserve"><tspan x="256.25766" y="128.58711" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">ЦСКА</tspan></text>
                      <text id="m_lbl853" x="284.96219" y="91.906357"  class="stylemap3" onclick="sst(853,1114)" xml:space="preserve"><tspan x="284.96219" y="91.906357" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Петровский парк</tspan></text>
                      <text id="m_lbl1022" x="382.18591" y="-125.31004"  class="stylemap3" onclick="sst(1022)" xml:space="preserve"><tspan x="382.18591" y="-125.31004" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Верхние Лихоборы</tspan></text>
                      <text id="m_lbl1023" x="382.18591" y="-169.95184"  class="stylemap3" onclick="sst(1023)" xml:space="preserve"><tspan x="382.18591" y="-169.95184" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Селигерская</tspan></text>
                    </g>
                    <text id="m_lbl1414" x="838.95148" y="237.76036" dominant-baseline="auto"  font-stretch="condensed" stroke-width="2" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal" onclick="sst(1414)" xml:space="preserve"><tspan x="838.95148" y="237.76036" dominant-baseline="auto" fill="#000000" font-family="'Roboto Condensed'" font-size="10.667px" font-stretch="condensed" letter-spacing="0px" stroke-width="2" word-spacing="0px" style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;font-variant-position:normal;line-height:1;paint-order:stroke markers fill;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal">Шоссе Энтузиастов</tspan></text>
                    <g stroke-width=".26458">
                      <g>
                        <text id="m_lbl801" x="87.806328" y="743.39532"  class="stylemap3" onclick="sst(801)" xml:space="preserve"><tspan x="87.806328" y="743.39532" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Рассказовка</tspan></text>
                        <text id="m_lbl802" x="87.806328" y="713.49786"  class="stylemap3" onclick="sst(802)" xml:space="preserve"><tspan x="87.806328" y="713.49786" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Новопеределкино</tspan></text>
                        <text id="m_lbl803" x="87.806328" y="683.60046"  class="stylemap3" onclick="sst(803)" xml:space="preserve"><tspan x="87.806328" y="683.60046" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Боровское шоссе</tspan></text>
                        <text id="m_lbl804" x="87.806328" y="654.19781"  class="stylemap3" onclick="sst(804)" xml:space="preserve"><tspan x="87.806328" y="654.19781" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Солнцево</tspan></text>
                        <text id="m_lbl805" x="87.806328" y="624.19623"  class="stylemap3" onclick="sst(805)" xml:space="preserve"><tspan x="87.806328" y="624.19623" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Говорово</tspan></text>
                        <text id="m_lbl806" x="87.806328" y="594.29877"  class="stylemap3" onclick="sst(806)" xml:space="preserve"><tspan x="87.806328" y="594.29877" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Озёрная</tspan></text>
                        <text id="m_lbl807" x="87.806328" y="553.62531"  class="stylemap2" onclick="sst(807)" xml:space="preserve"><tspan x="87.806328" y="553.62531" class="stylemap2">Мичуринский</tspan><tspan x="87.806328" y="564.29199" class="stylemap2">проспект</tspan></text>
                        <text id="m_lbl223" x="270.69156" y="-128.69337"  class="stylemap3" onclick="sst(223)" xml:space="preserve"><tspan x="270.69156" y="-128.69337" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Беломорская</tspan></text>
                        <text id="m_lbl1503" x="922.16669" y="672.51489"  class="stylemap2" onclick="sst(1503)" xml:space="preserve"><tspan x="922.16669" y="672.51489" class="stylemap2">Улица</tspan><tspan x="922.16669" y="683.18158" class="stylemap2">Дмитриевского</tspan></text>
                        <text id="m_lbl1502" x="922.16669" y="707.82233"  class="stylemap3" onclick="sst(1502)" xml:space="preserve"><tspan x="922.16669" y="707.82233" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Лухмановская</tspan></text>
                        <text id="m_lbl1501" x="922.16669" y="732.57245"  class="stylemap3" onclick="sst(1501)" xml:space="preserve"><tspan x="922.16669" y="732.57245" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Некрасовка</tspan></text>
                      </g>
                      <text id="m_lbl1504" x="803.13861" y="640.46313"  text-align="end" text-anchor="end" class="stylemap3" onclick="sst(1504)" xml:space="preserve"><tspan x="803.13861" y="640.46313" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" text-align="end" text-anchor="end" class="stylemap4">Косино</tspan></text>
                      <g>
                        <text id="m_lbl153" transform="scale(.99999 1)" x="213.36371" y="772.3067"  class="stylemap3" onclick="sst(153)" xml:space="preserve"><tspan x="213.36371" y="772.3067" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Филатов Луг</tspan></text>
                        <text id="m_lbl152" transform="scale(.99999 1)" x="213.36371" y="801.2251"  class="stylemap3" onclick="sst(152)" xml:space="preserve"><tspan x="213.36371" y="801.2251" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Прошкино</tspan></text>
                        <text id="m_lbl151" transform="scale(.99999 1)" x="213.36371" y="830.14349"  class="stylemap3" onclick="sst(151)" xml:space="preserve"><tspan x="213.36371" y="830.14349" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Ольховая</tspan></text>
                        <text id="m_lbl150" transform="scale(.99999 1)" x="213.36371" y="859.06189"  class="stylemap3" onclick="sst(150)" xml:space="preserve"><tspan x="213.36371" y="859.06189" font-family="'Roboto Condensed'" font-size="10.667px" stroke-width=".26458" class="stylemap4">Коммунарка</tspan></text>
                      </g>
                    </g>
                  </g>
                </g>
                <g transform="translate(0,140)" display="none" fill="#000000" font-family="'Roboto Condensed'" font-size="6.6667px" font-stretch="condensed" font-weight="500" letter-spacing="0px" word-spacing="0px">
                  <g stroke-width=".26458">
                    <text x="585.35413" y="199.76677"  class="stylemap3" xml:space="preserve"><tspan x="585.35413" y="199.76677" font-family="'Roboto Condensed'" font-size="6.6667px" font-stretch="condensed" font-weight="500" stroke-width=".26458" class="stylemap4">Рижский вокзал</tspan></text>
                    <text x="662.03302" y="284.87848"  class="stylemap2" xml:space="preserve"><tspan x="662.03302" y="284.87848" class="stylemap2">Ленинградский, Ярославский и</tspan><tspan x="662.03302" y="291.54514" class="stylemap2">Казанский вокзалы</tspan></text>
                    <text x="261.53302" y="304.4472"  class="stylemap2" xml:space="preserve"><tspan x="261.53302" y="304.4472" class="stylemap2">Белорусский</tspan><tspan x="261.53302" y="311.11386" class="stylemap2">вокзал</tspan></text>
                    <text x="689.8299" y="368.74799"  class="stylemap2" xml:space="preserve"><tspan x="689.8299" y="368.74799" font-family="'Roboto Condensed'" font-size="6.6667px" font-stretch="condensed" font-weight="500" stroke-width=".26458" class="stylemap2">Курский вокзал</tspan></text>
                    <text x="553.90851" y="629.06342"  class="stylemap2" xml:space="preserve"><tspan x="553.90851" y="629.06342" font-family="'Roboto Condensed'" font-size="6.6667px" font-stretch="condensed" font-weight="500" stroke-width=".26458" class="stylemap2">Павелецкий вокзал</tspan></text>
                  </g>
                  <text x="285.71973" y="452.86212"  stroke="#ffffff" text-align="end" text-anchor="end" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;line-height:1;paint-order:stroke markers fill" xml:space="preserve"><tspan x="285.71973" y="452.86212" font-family="'Roboto Condensed'" font-size="6.6667px" font-stretch="condensed" font-weight="500" stroke="#ffffff" text-align="end" text-anchor="end" style="font-feature-settings:normal;font-variant-caps:normal;font-variant-ligatures:no-common-ligatures;font-variant-numeric:normal;line-height:1;paint-order:stroke markers fill">Киевский вокзал</tspan></text>
                </g>
                <g transform="translate(0 218)" display="none">
                  <g transform="rotate(90 -113.64 274.51)" display="inline"  fill="none" stroke="#000" stroke-width=".5">
                    <path d="m-36.648 235.47h5" display="inline" ></path>
                    <path d="m-36.648 235.47v1.0526" display="inline" ></path>
                    <path d="m-31.648 235.47v1.0526" display="inline" ></path>
                  </g>
                </g>
              </svg>
      </div>
    </div>
    <div class="footer">
      <button @click="close" type="button" class="btn btn-pill btn-primary btn-air-primary btn-sm">Сохранить</button>
      <button @click="close" type="button" class="btn btn-pill btn-secondary btn-air-secondary btn-sm">Отменить</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "metromap",
  data: () => ({
    zoom : 1.5,
    left : -200,
    top: -200
  }),
  mounted() {
    document.addEventListener("wheel", this.wheel);
  },
  computed:{
    styleMap(){
      return "transform-origin: 0px 0px 0px; transform: matrix("+this.zoom+", 0, 0, "+this.zoom+", "+this.left+", "+this.top+"); will-change: transform;";
    }
  },
  methods:{
    close(){
      this.$store.dispatch('main/setVcomponent', {
        comp: null,
        field: null,
        spr: null
      })
    },
    wheel(e){
      if(e.deltaY > 0){
        this.zoom = this.zoom - 0.2
        this.left = this.left + 80
        this.top = this.top + 80
      }else{
        this.zoom = this.zoom + 0.2
        this.left = this.left - 80
        this.top = this.top - 80
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.main{
  padding: 12px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
.header{
  width: 100%;
  margin-bottom: 12px;
}
.body{
  flex: 1 1 auto;
  overflow: hidden;
  width: 100%;
}
.footer{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
}

.stylemap6{
  font-feature-settings:normal;
  font-variant-alternates:normal;
  font-variant-caps:normal;
  font-variant-ligatures:normal;
  font-variant-numeric:normal;
  font-variant-position:normal;
  isolation:auto;
  mix-blend-mode:normal;
  paint-order:stroke fill markers;
  shape-padding:0;
  text-decoration-color:#000000;
  text-decoration-line:none;
  text-decoration-style:solid;
  text-indent:0;
  text-orientation:mixed;
  text-transform:none;
  white-space:normal;
}
.stylemap5{
  font-feature-settings:normal;
  font-variant-alternates:normal;
  font-variant-caps:normal;
  font-variant-ligatures:normal;
  font-variant-numeric:normal;
  font-variant-position:normal;isolation:auto;
  mix-blend-mode:normal;
  shape-padding:0;
  text-decoration-color:#000000;
  text-decoration-line:none;
  text-decoration-style:solid;
  text-indent:0;
  text-orientation:mixed;
  text-transform:none;
  white-space:normal;
}
.stylemap4{
  font-feature-settings:normal;
  font-variant-caps:normal;
  font-variant-ligatures:no-common-ligatures;
  font-variant-numeric:normal;
}
.stylemap3{
  font-feature-settings:normal;
  font-variant-caps:normal;
  font-variant-ligatures:no-common-ligatures;
  font-variant-numeric:normal;
  line-height:1.25;
}
.stylemap2{
  font-feature-settings:normal;
  font-variant-caps:normal;
  font-variant-ligatures:no-common-ligatures;
  font-variant-numeric:normal;
  line-height:1
}
.stylemap1{
  font-feature-settings:normal;
  font-variant-alternates:normal;
  font-variant-caps:normal;
  font-variant-ligatures:no-common-ligatures;
  font-variant-numeric:normal;
  font-variant-position:normal;
  line-height:1.25;
  paint-order:stroke markers fill;
  shape-padding:0;
  text-decoration-color:#000000;
  text-decoration-line:none;
  text-decoration-style:solid;
  text-indent:0;
  text-orientation:mixed;
  text-transform:none;
  white-space:normal
}

.page-wrapper .page-body-wrapper {
  overflow: hidden;
}

.scheme-objects-view__label, .scheme-objects-view__station {
  cursor: pointer;
  outline: 0;
  pointer-events: all;
  -webkit-tap-highlight-color: transparent;
}




.metro-app {
  width: 100%;
  height: 100%;
  display: contents;
  flex-direction: row-reverse;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.metro-scheme-view__scheme-container {
  overflow: visible;
  outline: 0;
  position: fixed;
}

.scheme-objects-view__scheme-svg._opaque {
  opacity: .2;
}
.scheme-objects-view__scheme-svg {
  position: absolute;
  overflow: visible;
}
.scheme-objects-view__scheme-svg._click-through {
  pointer-events: none;
}
.scheme-objects-view__scheme-svg._opaque {
  opacity: 1;
}
.scheme-objects-view__scheme-svg {
  position: absolute;
  overflow: visible;
}
.metro-scheme-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: hidden;
  outline: 0;
  border-right: 1px solid #ccc;
}

.rpanel{
  overflow: hidden;
}

@media screen and (max-device-width: 600px) {
  .rpanel{
    width: 100%;
    z-index: 5000;
    left: 0;
  }
}


@media screen and (min-device-width: 1200px) {
 .rpanel{
    width: 50%;
    z-index: 5000;
    left: calc(50%);
  }
}



</style>
