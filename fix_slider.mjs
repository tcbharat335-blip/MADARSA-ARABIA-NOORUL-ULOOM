import fs from 'fs';
let content = fs.readFileSync('src/components/PrincipalDashboard.tsx', 'utf-8');

let newHtml = `
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                      {((schoolConfig.heroBgImages && schoolConfig.heroBgImages.length > 0) ? schoolConfig.heroBgImages : [schoolConfig.heroBg1, schoolConfig.heroBg2, schoolConfig.heroBg3].filter(Boolean) as string[]).map((img, idx) => (
                         <div key={idx} className="relative group bg-slate-100 dark:bg-slate-800 p-2 rounded-xl flex flex-col items-center gap-2 border border-slate-200 dark:border-slate-700">
                           <img src={img} alt={"Slide " + (idx + 1)} className="w-full h-24 object-cover rounded-lg shadow-sm" />
                           <div className="flex justify-between w-full mt-1">
                             <span className="font-bold text-[10px] text-slate-500">Slide {idx + 1}</span>
                             <button
                                type="button"
                                onClick={() => {
                                    let currentImages = schoolConfig.heroBgImages;
                                    if (!currentImages || currentImages.length === 0) {
                                        currentImages = [schoolConfig.heroBg1, schoolConfig.heroBg2, schoolConfig.heroBg3].filter(Boolean) as string[];
                                    }
                                    const nextImages = currentImages.filter((_, i) => i !== idx);
                                    setSchoolConfig({ ...schoolConfig, heroBgImages: nextImages });
                                }}
                                className="text-[10px] text-rose-500 font-extrabold uppercase tracking-wider hover:underline cursor-pointer"
                             >
                               Remove
                             </button>
                           </div>
                         </div>
                      ))}
                    </div>
                  </div>

                  {/* STAT COUNTERS START */}
                  <div className="bg-slate-50/50 dark:bg-slate-950/40 mt-6 p-4 rounded-xl border border-slate-150 dark:border-slate-850 space-y-4">
                    <span className="font-bold text-slate-600 dark:text-slate-300 block">Performance Metrics (Overlaid on Hero image)</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-slate-500">Metric 1 (e.g. 50+)</label>
                        <div className="flex gap-2">
                          <input type="text" placeholder="Value" value={schoolConfig.stat1Num || ""} onChange={(e) => setSchoolConfig({ ...schoolConfig, stat1Num: e.target.value })} className="w-1/3 p-2 border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900" />
                          <input type="text" placeholder="Label (e.g. Certified Teachers)" value={schoolConfig.stat1Label || ""} onChange={(e) => setSchoolConfig({ ...schoolConfig, stat1Label: e.target.value })} className="w-2/3 p-2 border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-slate-500">Metric 2 (e.g. 1000+)</label>
                        <div className="flex gap-2">
                          <input type="text" placeholder="Value" value={schoolConfig.stat2Num || ""} onChange={(e) => setSchoolConfig({ ...schoolConfig, stat2Num: e.target.value })} className="w-1/3 p-2 border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900" />
                          <input type="text" placeholder="Label (e.g. Enrolled Students)" value={schoolConfig.stat2Label || ""} onChange={(e) => setSchoolConfig({ ...schoolConfig, stat2Label: e.target.value })} className="w-2/3 p-2 border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-semibold text-slate-500">Metric 3 (e.g. 15+ Years)</label>
                        <div className="flex gap-2">
                          <input type="text" placeholder="Value" value={schoolConfig.stat3Num || ""} onChange={(e) => setSchoolConfig({ ...schoolConfig, stat3Num: e.target.value })} className="w-1/3 p-2 border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900" />
                          <input type="text" placeholder="Label (e.g. Academic Excellence)" value={schoolConfig.stat3Label || ""} onChange={(e) => setSchoolConfig({ ...schoolConfig, stat3Label: e.target.value })} className="w-2/3 p-2 border border-slate-200 dark:border-slate-800 rounded bg-white dark:bg-slate-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: CREDENTIAL PANELS */}`;

let startPattern = '<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">';
let endPattern = '{/* SECTION 3: CREDENTIAL PANELS */}';

let startIdx = content.indexOf(startPattern);
let endIdx = content.indexOf(endPattern);

if(startIdx !== -1 && endIdx !== -1) {
    content = content.substring(0, startIdx) + newHtml + content.substring(endIdx + endPattern.length);
    fs.writeFileSync('src/components/PrincipalDashboard.tsx', content);
    console.log("Fixed!");
} else {
    console.log("Not found to fix");
}
