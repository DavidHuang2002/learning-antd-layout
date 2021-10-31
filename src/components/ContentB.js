import React from "react";

export default function ContentB({ ifDisplay }) {
  return (
    <section
      className="contentB"
      style={{ display: ifDisplay ? "block" : "none" }}
    >
      <h2> This is content B </h2>
      <p>
        Volutpat est velit egestas dui id ornare arcu odio. Ultricies mi quis
        hendrerit dolor magna eget est lorem. Nulla aliquet porttitor lacus
        luctus accumsan tortor posuere ac ut. Eget sit amet tellus cras
        adipiscing. Et egestas quis ipsum suspendisse ultrices gravida. Urna
        neque viverra justo nec. Neque gravida in fermentum et. Neque viverra
        justo nec ultrices dui. Lobortis feugiat vivamus at augue eget arcu
        dictum. Lacus sed viverra tellus in hac habitasse platea dictumst. Diam
        sit amet nisl suscipit adipiscing bibendum est ultricies integer. Neque
        convallis a cras semper auctor neque vitae tempus. Ut eu sem integer
        vitae justo eget. Orci eu lobortis elementum nibh tellus molestie.
      </p>
    </section>
  );
}
