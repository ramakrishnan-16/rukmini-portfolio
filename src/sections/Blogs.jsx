import React, { useState } from "react";
import "./Style.css";

const Blogs = () => {
  const categories = ["Perspective", "Verses"];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [expandedBlog, setExpandedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      category: "Perspective",
      title: "പരസ്യങ്ങളിലെ രാഷ്ട്രിയം : Beyond stereotypes",
      content: `Targeted Audience!ഏതൊരു  പരസ്യത്തിനും അതിന്റെ പ്രധാന ലക്ഷ്യം consumers  ആണ് For Whom and To Whom-  അത് Advertising ൽ മാറ്റിനിർത്താൻ പറ്റാത്ത essence ആണ്  – ഒരു product തേടുന്ന പ്രത്യേകമായ ഒരു ഗ്രൂപ്പിനെ ആകർഷിക്കുക എന്നതാണ് ഏതുകാലത്തും പരസ്യങ്ങൾ കൊണ്ട് ഉദ്ദേശിക്കുന്നത്  . മാർക്കറ്റ് റിസർചിന്റെ അടിസ്ഥാനത്തിൽ ആ ഗ്രൂപ്പിനെയാണ് പരസ്യപ്രചാരണം ലക്ഷ്യമിടുന്നത്. പ്രത്യേകിച്ച് ജ്വല്ലറീസ് പോലുള്ള മേഖലയിൽ, പതിവായി ഇതിന്റെ Target ഉറപ്പായും സ്ത്രീകളാണ്. Ornaments സിനോടുള്ള  സ്ത്രീകളുടെ ഇഷ്ട്ടങ്ങൾ, ആഗ്രഹവും, നമ്മുടെ Tradition and culture -റും ഇതിന് പിന്നിലുണ്ട്.അത്കൊണ്ട് തന്നെ ഇന്നോളം jewellers പരിസ്യങ്ങളിൽ  അഭിനയിച്ചിട്ടുള്ളതും സ്ത്രീകൾ ആയിരുന്നു. അല്ലെങ്കിൽ സ്ത്രീകളെ ആകർഷിക്കുന്ന രീതിയിലായിരുന്നു ആ പരസ്യങ്ങളെല്ലാം നിർമിച്ചതും. 

      Why not Men? 

        ഇവിടെയാണ് പരസ്യച്ചിത്ര സംവിധായകൻ പ്രകാശ് വർമ അവതരിപ്പിച്ച ആശയം ഏറെ attractive ആക്കുന്നത്.  'ആഭരണങ്ങൾ സ്ത്രീകൾക്ക് മാത്രം' എന്ന ധാരണയെ ഒന്ന് പുതുക്കി എടുത്തിരിക്കുകയാണ് പ്രകാശ് വർമ.  
        എന്നും വ്യത്യസ്തമായ ആശയങ്ങൾകൊണ്ട് തന്റെ പരസ്യങ്ങളെ “ So called Ad film making “ നിന്ന് മാറ്റിനിർത്തിയ സംവിധാന ശൈലി.

        മറ്റ് നല്ല ഉദാഹരണമാണ് കുറച്ച് വർഷങ്ങൾക്ക് മുൻപുള്ള ഭീമാ ജ്വല്ലറിസ്‌ന്റെ പരസ്യം – ട്രാൻസ്‌ജെൻഡർ സ്ത്രീ കഥാപാത്രത്തെ feature ചെയ്ത്,  ഒരുക്കിയ സാമൂഹികപ്രാധാന്യമുള്ളതുമായ ഒരു പരസ്യം TV വാർത്തകളിൽ  ചർച്ചയായിരുന്നു അന്ന്. " പെണ്ണായാൽ പൊന്ന് വേണം പൊന്നിൻ കുടമാരിവേണം " എന്ന് ഒരു സമയത്ത് പരസ്യം ചെയ്തിരുന്ന ഭീമയിൽ നിന്ന്
        "Pure As Love " എന്ന ഒരു വേറിട്ട ആശയം  ഉണ്ടായതും ഏറെ നന്നായിരുന്നു. കാലത്തിനൊപ്പം സഞ്ചരിച്ചു ഭീമയുടെ ആ ആശയം. 
        അതിനു ശേഷം, കവിത ഗോൾഡ് ആൻഡ് ഡയമണ്ട്സിന്റെ “Choose your special ” എന്ന tag line ൽ ഫഹദ് ഫാസിൽ അഭിനയിച്ച , മൂക്കുത്തി അണിയാൻ കൊതിക്കുന്ന ഒരു പുരുഷ കഥാപാത്രത്തിലൂടെയാണ് ആ പരസ്യം സംസാരിക്കപ്പെട്ടത്. അതും സാമൂഹിക പ്രസക്തി ഏറെയുള്ള പരസ്യമായിരുന്നു.
        Real incident ൽ നിന്നും പ്രചോദനം ഉൾക്കൊണ്ട്‌ നിർമിച്ച Ad ഫിലിം. 
        ആഭരണങ്ങൾ അങ്ങേയറ്റം വ്യക്തിപരവും ലൈംഗികമായി ഏകപക്ഷീയവുമല്ല എന്ന് ഓർമപ്പെടുത്തുന്നുണ്ടായിരുന്നു ഈ പരസ്യങ്ങൾ ഒക്കെയും.അതാത് " politics " വ്യക്തമാക്കിയ Ads. കഥ പറയുന്നതിനോടൊപ്പം  അല്ലെങ്കിൽ audience നെ target ചെയ്യുമ്പോഴും അതിൽ വ്യക്തമായ രാഷ്ട്രീയം പങ്കുവെക്കുന്നതും മാറി ചിന്തിക്കുന്നതും കലയാണ്.

        ഇവയെല്ലാം കൂടി നോക്കുമ്പോൾ, ' Targeted Audience ' ന്റെ Typical മാതൃകയെ പുനർപരിശോധിക്കേണ്ട സമയമാണെന്നാണ് തോന്നിക്കുന്നത്. വ്യത്യസ്ത ലൈംഗിക തിരിച്ചറിവുകളുള്ളവരും, വ്യത്യസ്ത ആഗ്രഹങ്ങളുള്ളവരുമായ ഉപഭോക്താക്കളെ ഉൾക്കൊണ്ടുകൊണ്ടേയാണ് ഇന്ന് പരസ്യലോകം മുന്നേറുന്നത്. അതിലൂടെ ഒരു brand ന്റെ സംസ്കാരബോധവും സാമൂഹിക ഉത്തരവാദിത്വവും വ്യക്തമാവുന്നു.

        " സുന്ദരൻ ലോക സുന്ദരൻ......"

        മംഗലശ്ശേരി നീലകണ്ഠനായും, വേലായുധനായും ആട് തോമയായും കണ്ട ആ പൗരുഷ ഭാവം നേരെ വിപരീത സ്ത്രൈണ ഭാവത്തെ അവതരിപ്പിക്കുമ്പോൾ,
        ഓർക്കുന്നത്:' മഞ്ഞിൽ വിരിഞ്ഞ പൂക്കളിൽ', വില്ലൻ കഥാപാത്രത്തിന് ഒരു മുഖം തേടിയപ്പോൾ ഒരു ലാളിത്യം തോന്നിക്കുന്ന വില്ലനെ ആണ് തേടിയതെന്നും, അങ്ങനെ ആണ് മോഹൻലാലിനെ തിരഞ്ഞെടുക്കാൻ കാരണമായതെന്നും പിന്നീട്  ഫാസിൽ പറഞ്ഞതാണ്. ശേഷം, ആ ലളിത ഭാവക്കാരൻ വിൻസെന്റ് ഗോമസ് ആയി, ഇന്നോളം ആ മുഖത്ത് മാറിമറിഞ്ഞത് എത്രെയോ ഭാവങ്ങൾ.നമ്മൾ ഏറെ ഇഷ്ട്ടപ്പെട്ട ലാൽ ഭാവങ്ങൾ, 
        ഈ സ്ത്രൈണ ഭാവത്തെ അത്രെയും മനോഹരമാക്കാൻ മോഹൻലാലിൻ മേൽ ഒരു നടൻ ഉണ്ടോ!!!. അർദ്ധനാരിശ്വരൻ - ത്രിലോക സുന്ദരനെ,  “ ആനന്ദ നടനം ആടിനാൻ അവൻ ആനന്ദ നടനം ആടിനാൻ “......`,
    },
    {
      id: 2,
      category: "Perspective",
      title: "അത്താഴ പഷ്ണിക്കാരുണ്ടോ?",
      content: `How interesting are the beautiful rituals that performed in my land!

        What if a temple make this to its people as a question.

        "അത്താഴ പഷ്ണിക്കാരുണ്ടോ?"

        Not as a formality, but as a duty!!!! I loved it!!!

        A custom that continues in Vaikom even today, regardlessly. This tradition still continues here ,  undeterred by time in or the circumstance which we all changed over years. Every evening, the question echoes at vaikom and every evening, someone somewhere is fed. This act of compassion more than a ritual; it is the way of life performed here without a hestitation. I came to hear that Vaikathappan was lovingly called as " അന്ന ദാനപ്രഭു " - the Lord who gives food - " The lord of food donation ".And in his land, no one should go to bed hungry......

        What if the lord says " എന്റെ നാട്ടിൽ ആരും വിശന്നു കിടക്കരുത് ", was behind this or its another belief.

        “നൂറാളെ ഊട്ടാനാവില്ലെങ്കിൽ ഒരാൾക്കെങ്കിലും അന്നം നല്കുക”
        - മദർ തെരേസ.`,
    },
    {
      id: 1,
      category: "Verses",
      title: "Branches",
      content: `The sky leers at you from above,
                but, you still have a long way to reach him.
                The closer you get, the more he laughs and goes higher.
                You will grow to his flank afresh.
                He'll watch you by hiding behind the clouds. 
                You keep on loving the naughty sky that you can never reach.`,
    },
    {
      id: 2,
      category: "Verses",
      title: "Nightingale's Listener",
      content: `The moon was masked that night. 
                Somewhere from darkness,
                Nightingale's daydreams
                Sounded as a song every night 
                like she penned 
                her existence…
                She dissented with the darkness.
                On the contrary,
                In the warmth of my bed 
                I listened to her sorrows. 
                than the night did,
                I fall asleep amid her talk...
                I had remorse the next morning. 
                for being a partial listener 
                to her words...`,
    },
  ];

  const descriptions = {
    Perspective: `Everything surrounded us has many sides, and every one of them holds more than what we see on the surface. In my own Perspective, here I share my personal take on different topics — Cinema, Politics, life, art, culture, memories or the small details of everyday moments. These writings are not about facts alone, but about how I see and feel them. Through this blog, I invite you to step into my world of thoughts, to see familiar things in a different lens.`,
    Verses: `A poem, more than words, it is an emotion, rhythm, and imagery tied together in verses. My Poem is a collection of my heart’s whispers and my mind’s reflections. What I see around is written with words. Each poem carries a piece of me. This space is where I let feelings speak louder than explanations, hoping they find a place in your heart too.`,
  };

  const toggleReadMore = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (
    <section id="blogs" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 mt-5">Blogs</h2>

        {/* Category Buttons */}
        <ul className="nav justify-content-center mb-4">
          {categories.map((cat) => (
            <li key={cat} className="nav-item">
              <button
                className={`nav-link btn ${
                  activeCategory === cat ? "active-underline text-danger" : "text-white"
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Category Description */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-8">
            <p className="category-description">{descriptions[activeCategory]}</p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="row justify-content-center">
          {blogs
            .filter((blog) => blog.category === activeCategory)
            .map((blog, index, arr) => {
              const isExpanded = expandedBlog === blog.id;
              const preview =
                blog.content.length > 300 && !isExpanded
                  ? blog.content.slice(0, 300) + "..."
                  : blog.content;

              return (
                <div key={blog.id} className="col-md-8">
                  <div className="blog-card">
                    <h4 className="fw-bold">{blog.title}</h4>
                    <p>{preview}</p>
                    {blog.content.length > 300 && (
                      <button
                        onClick={() => toggleReadMore(blog.id)}
                        className="read-more-btn"
                      >
                        {isExpanded ? "Read Less ↑" : "Read More ↓"}
                      </button>
                    )}
                  </div>

                  {index !== arr.length - 1 && <hr />}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;