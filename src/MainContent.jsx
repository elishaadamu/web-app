import React, { useState } from "react";

const MainContent = ({ data }) => {
  const objectives = data.children;
  const [activeObjectiveName, setActiveObjectiveName] = useState(objectives[0]?.name);
  const [activeMeasureName, setActiveMeasureName] = useState(objectives[0]?.children[0]?.name);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleObjectiveClick = (objectiveName) => {
    setActiveObjectiveName(objectiveName);
    const newActiveObjective = objectives.find((o) => o.name === objectiveName);
    const newMeasures = newActiveObjective?.children || [];
    setActiveMeasureName(newMeasures[0]?.name);
    setIsSidebarOpen(false);
  };

  const activeObjective = objectives.find((o) => o.name === activeObjectiveName);
  const measures = activeObjective?.children || [];
  const activeMeasure = measures.find((m) => m.name === activeMeasureName);

  const goalColors = ["#46b96e", "#eec722", "#6273d1", "#3799dc", "#e33bba"];
  const activeObjectiveIndex = objectives.findIndex((o) => o.name === activeObjectiveName);
  const activeGoalColor = goalColors[activeObjectiveIndex % goalColors.length] || "#46b96e";

  return (
    <div
      className="h-full flex flex-col relative"
      style={{
        "--active-goal-color": activeGoalColor,
      }}
    >
      {/* Horizontal Goal Tabs - FIXED TOP */}
      <div className="border-b border-gray-700 bg-gray-900 w-full px-4 flex-none z-20">
        <nav className="-mb-px flex flex-wrap gap-2 justify-center py-2" aria-label="Tabs">
          {objectives.map((objective, index) => (
            <button
              key={objective.name}
              onClick={() => handleObjectiveClick(objective.name)}
              style={{ "--goal-color": goalColors[index % goalColors.length] }}
              className={`${
                activeObjectiveName === objective.name
                  ? "bg-[var(--goal-color)] text-white font-semibold shadow-md"
                  : "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-[var(--goal-color)] hover:text-white"
              } text-center py-2 px-4 rounded-t-lg font-medium text-sm sm:text-base transition-all duration-300 ease-in-out`}
            >
              {index + 1}. {objective.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Mobile sidebar toggle */}
        <div className="md:hidden p-4 border-b border-gray-800 flex-none bg-gray-900/50">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="bg-gray-700 text-gray-200 font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-between"
          >
            <span>{isSidebarOpen ? "Hide" : "Show"} Measures</span>
            <span className="text-xs uppercase bg-gray-600 px-2 py-1 rounded">{activeMeasure?.name}</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row flex-grow w-full overflow-hidden">
          {/* Sidebar */}
          <div
            className={`
            flex flex-col
            md:w-1/4 md:h-full md:overflow-y-auto border-r border-gray-800 bg-gray-900/20
            fixed md:static top-0 left-0 h-full w-4/5 max-w-sm bg-gray-800 p-4 shadow-xl z-20 transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
          >
            <h2 className="text-lg font-bold text-gray-400 mb-4 px-2 tracking-wider mt-2 uppercase">Measures</h2>
            <div className="space-y-1 px-1 pb-10 flex-grow md:overflow-y-auto">
              {measures.map((measure) => (
                <button
                  key={measure.name}
                  onClick={() => {
                    setActiveMeasureName(measure.name);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-md transition-all duration-200 border-l-4 ${
                    activeMeasureName === measure.name
                      ? "bg-[var(--active-goal-color)] bg-opacity-10 text-white font-medium border-[var(--active-goal-color)] shadow-sm"
                      : "text-gray-400 border-transparent hover:bg-gray-700/50 hover:text-gray-100"
                  }`}
                >
                  <div className="text-sm font-semibold">{measure.name}</div>
                  <div className="text-xs opacity-60 truncate">{measure.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Report Content */}
          <div className="w-full md:w-3/4 flex-grow flex flex-col h-full bg-gray-950/30 overflow-hidden">
            <div className="flex-grow p-6 md:p-12 flex flex-col overflow-y-auto scroll-smooth">
              <div className="max-w-4xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-[var(--active-goal-color)] mb-8 flex items-center gap-3">
                  <span className="p-3 bg-[var(--active-goal-color)] bg-opacity-20 rounded-xl shadow-inner border border-[var(--active-goal-color)]/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                  {activeMeasure?.name}
                </h2>
                <div className="space-y-10">
                  {activeMeasure?.children?.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/40 p-8 rounded-3xl border border-gray-700/50 hover:border-[var(--active-goal-color)] transition-all duration-700 group shadow-2xl backdrop-blur-sm"
                    >
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="w-4 h-4 bg-[var(--active-goal-color)] rounded-full mr-5 shadow-[0_0_15px_var(--active-goal-color)] group-hover:scale-125 transition-transform duration-500"></span>
                        {item.name}
                      </h3>
                      {item.content ? (
                        <div className="mt-6 space-y-8">
                          {item.content.map((c, i) => (
                            <div key={i} className="bg-gray-950/80 p-8 rounded-2xl border-l-[6px] border-[var(--active-goal-color)] shadow-inner transform group-hover:translate-x-1 transition-transform duration-500">
                              <h4 className="text-xs font-black text-[var(--active-goal-color)] uppercase tracking-[0.3em] mb-4">
                                {c.label}
                              </h4>
                              <p className="text-gray-100 text-xl italic leading-relaxed font-light">
                                "{c.text}"
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  {(!activeMeasure?.children || activeMeasure.children.length === 0) && (
                    <div className="text-center py-20">
                      <h3 className="text-2xl font-bold text-gray-500">Information for this section will be update soon.</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
