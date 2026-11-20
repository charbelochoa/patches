import { __toESM } from "./D7h9nIRM.js";
import {
  require_client,
  require_jsx_runtime,
  require_react,
} from "./CO_jKHGn.js";
import {
  context_exports$1,
  context_provider_exports$1,
  i18n_context_exports,
  lix_context_exports,
} from "./CBqBFjoY.js";
import { DesignSystemImage } from "./C6Zpjmf6.js";
import { Patches, Timer } from "./dt4KZ7QW.js?v=20261120";
import { PUZZLES_BANK } from "./puzzles-data.js?v=20261120";

const React = __toESM(require_react(), 1);
const ReactDOMClient = require_client();
const jsxRuntime = require_jsx_runtime();
const { jsx, jsxs } = jsxRuntime;

const { I18nContext } = i18n_context_exports;
const { TrackingContext } = context_exports$1;
const { LixContext } = lix_context_exports;
const ThemeProvider = context_provider_exports$1.default;

const MOCK_LIX = {
  lixClient: {
    getTreatmentIsEnabled(key) {
      return key === "web.arch.dls-icons-refresh";
    },
    getTreatment(key) {
      return key === "web.arch.dls-icons-refresh" ? "enabled" : "control";
    },
  },
  onLixRefresh() {
    return () => {};
  },
};

const MESSAGES_ES = {
  timer_a11y: "{:hasHours,boolean,true#{:hours} horas} {:minutes} minutos {:seconds} segundos",
  games_instructions_header: "Cómo se juega",
  games_instructions_expand_a11y: "Ampliar las instrucciones del juego",
  games_instructions_collapse_a11y: "Contraer las instrucciones del juego",
  games_keyboard_instructions: "También puedes usar las flechas para navegar.",
  game_load_a11y: "Cargando juego",
  gameboard: "Tablero de juego",
  games_reset_game: "Reiniciar partida",
  press_enter_to_gameboard: "Pulsa Intro para ir al tablero",
  press_escape_to_exit_gameboard: "Pulsa ESC para salir del tablero",
  undo: "Deshacer",
  hint: "Pista",
  button_loading: "Cargando",
  button_reenabled: "Se ha activado el botón {:buttonCta}.",
  undo_button_a11y_notification: "Se ha revertido la última acción.",
  undo_button_a11y_notification_with_disabled: "Se ha deshecho el último movimiento. El botón «Deshacer» está desactivado.",
  hint_title: "Pista:",
  dismiss_hint: "Descartar pista",
  show_me: "Mostrar",
  no_hint: "Vas por buen camino. Aún no hay pistas disponibles.",
  hint_cooldown: "Debes esperar antes de usar otra pista.",
  hint_cooldown_2: "Pista aún no disponible. ¡Reflexiona un poco más!",
  hint_nudge: "¿Te has atascado? Toca «Pista» para ponértelo más fácil.",
  hint_info: "Hemos borrado tu camino hasta el primer error. También hemos ampliado tu recorrido.",
  hint_info_add_segment_only: "Hemos ampliado tu recorrido",
  patches_instructions_fill_grid: "Completa cada figura para rellenar la cuadrícula",
  patches_instructions_square: "Cuadrado",
  patches_instructions_tall_rect: "Rectángulo alto",
  patches_instructions_wide_rect: "Rectángulo ancho",
  patches_instructions_any_shape: "Cualquiera de estos",
  patches_instructions_fixed_size: "= la figura tiene un tamaño fijo",
  patches_instructions_flexible_size: "= el tamaño es flexible",
  patches_instructions_size_hint: "Si la figura contiene un número, ese debe ser su tamaño.",
  patches_error_region_size: "¡Vaya! Esta región sombreada solo puede contener {:count} celdas.",
  patches_error_shape_square: "¡Vaya! Esta región sombreada debe ser un cuadrado.",
  patches_error_shape_h_rect: "¡Vaya! Esta región sombreada debe ser un rectángulo ancho (▬), no un rectángulo alto (▮).",
  patches_error_shape_h_rect_square: "¡Vaya! Esta región sombreada debe ser un rectángulo ancho (▬), no un cuadrado.",
  patches_error_shape_v_rect: "¡Vaya! Esta región sombreada debe ser un rectángulo alto (▮), no un rectángulo ancho (▬).",
  patches_error_shape_v_rect_square: "¡Vaya! Esta región sombreada debe ser un rectángulo alto (▮), no un cuadrado.",
  patches_error_unfilled: "Debes pasar por todas las celdas del tablero.",
  patches_error_region_count_mismatch: "Esta región sombreada debe contener exactamente {:count,number,integer} celdas.",
  patches_hint_c2_partial_square: "La figura delimitada debe ser un cuadrado.",
  patches_hint_c1_partial_one_extension: "Solo hay una forma de completar la figura delimitada. Con las celdas actuales bloqueadas, esta es la única forma de completar la figura.",
  patches_hint_b1_clue_one_placement: "Solo hay una colocación válida para la figura delimitada. Todas las demás posiciones entran en conflicto con otra pista, por lo que esta es la única colocación válida.",
  patches_hint_a1_cell_one_clue: "La celda delimitada solo puede pertenecer a la región de la figura resaltada. No puede conectarse a ninguna otra pista o región sin romper una regla, por lo que debe ir aquí.",
  patches_hint_b2_shared_cells: "Se han delimitado todas las posiciones posibles de la figura resaltada. Las celdas resaltadas aparecen en todas ellas, por lo que deben pertenecer a esta región.",
  patches_hint_conflict: "¡Vaya! Tu tablero tiene algunos errores. Lo hemos devuelto a la última versión válida.",
  patches_hint_correction_prefix: "Errores eliminados. Esto es lo que puedes hacer a continuación:",
  patches_freeform_tooltip_tall: "Esta es una figura geométrica libre. Puede ser un <b>rectángulo alto</b>, un rectángulo ancho o un cuadrado.",
  patches_freeform_tooltip_wide: "Esta es una figura geométrica libre. Puede ser un rectángulo alto, un <b>rectángulo ancho</b> o un cuadrado.",
  patches_freeform_tooltip_square: "Esta es una figura geométrica libre. Puede ser un rectángulo alto, un rectángulo ancho o un <b>cuadrado</b>.",
  patches_cell_a11y_shape_square: "cuadrado",
  patches_cell_a11y_shape_horiz: "rectángulo ancho",
  patches_cell_a11y_shape_vert: "rectángulo alto",
  patches_cell_a11y_shape_freeform: "figura libre",
  patches_cell_a11y_empty: "Fila {:row,number,integer}, columna {:col,number,integer}",
  patches_cell_a11y_clue: "Fila {:row,number,integer}, columna {:col,number,integer}, pista {:shape}",
  patches_cell_a11y_clue_count: "Fila {:row,number,integer}, columna {:col,number,integer}, pista {:shape}, {:count,number,integer} celdas ",
  patches_cell_a11y_in_region: "Fila {:row,number,integer}, columna {:col,number,integer}, en región con pista en fila {:clueRow,number,integer}, columna {:clueCol,number,integer}",
  patches_cell_a11y_clue_in_region: "Fila {:row,number,integer}, columna {:col,number,integer}, pista {:shape}, en región dibujada",
  patches_cell_a11y_clue_count_in_region: "Fila {:row,number,integer}, columna {:col,number,integer}, pista {:shape}, {:count,number,integer} celdas, en región dibujada",
  patches_puzzle_complete: "¡Partida superada!",
  patches_freeform_tooltip_dismiss: "Descartar descripción emergente",
  patches_a11y_keyboard_mode_entered: "Modo de teclado activado. Usa las flechas para desplazarte y la barra espaciadora para dibujar. Las teclas Retroceso o Suprimir sirven para borrar la región dibujada.",
  patches_a11y_drawing_started: "Dibujo iniciado.",
  patches_a11y_region_placed: "Región colocada.",
  patches_a11y_drawing_cancelled: "Dibujo cancelado.",
  patches_a11y_region_erased: "Región borrada.",
};

const MESSAGES_EN = {
  ...MESSAGES_ES,
  undo: "Undo",
  hint: "Hint",
  hint_title: "Hint:",
  dismiss_hint: "Dismiss hint",
  show_me: "Show me",
  no_hint: "You're on the right track. No hints available yet.",
  hint_cooldown: "Please wait before using another hint.",
  hint_nudge: "Stuck? Tap 'Hint' for a nudge.",
  patches_instructions_fill_grid: "Complete each shape to fill the grid",
  patches_instructions_square: "Square",
  patches_instructions_tall_rect: "Tall rectangle",
  patches_instructions_wide_rect: "Wide rectangle",
  patches_instructions_any_shape: "Any of the above",
  patches_instructions_size_hint: "If a shape has a number, it must be that size.",
  patches_error_region_size: "Oops! This shaded region can only hold {:count} cells.",
  patches_error_shape_square: "Oops! This shaded region must be a square.",
  patches_error_shape_h_rect: "Oops! This shaded region must be a wide rectangle (▬), not a tall rectangle (▮).",
  patches_error_shape_h_rect_square: "Oops! This shaded region must be a wide rectangle (▬), not a square.",
  patches_error_shape_v_rect: "Oops! This shaded region must be a tall rectangle (▮), not a wide rectangle (▬).",
  patches_error_shape_v_rect_square: "Oops! This shaded region must be a tall rectangle (▮), not a square.",
  patches_error_unfilled: "Every cell on the board must be filled.",
  patches_error_region_count_mismatch: "This shaded region must contain exactly {:count,number,integer} cells.",
  patches_hint_c2_partial_square: "The outlined shape must be a square.",
  patches_hint_c1_partial_one_extension: "There is only one way to complete the outlined shape.",
  patches_hint_b1_clue_one_placement: "There is only one valid placement for the outlined shape.",
  patches_hint_a1_cell_one_clue: "The outlined cell can only belong to the highlighted shape's region.",
  patches_hint_b2_shared_cells: "All possible placements for the highlighted shape share these cells.",
  patches_hint_conflict: "Oops! Your board had some errors. We reverted it to the last valid state.",
  patches_hint_correction_prefix: "Errors cleared. Here's what you can do next:",
  patches_puzzle_complete: "Puzzle complete!",
};

const MOCK_TRACKING = {
  updateBasePageKey() {},
  getBasePageKey() {
    return "p_mwlite_games_patches_gameboard";
  },
  getClients() {
    return {
      jetCore: {
        reportError() {},
        reportLog() {},
        reportOops() {},
      },
      trackingCore: {
        fireEvent() {
          return Promise.resolve(true);
        },
        on() {},
        callOnDestroy() {},
        destroy() {},
        forceFlush() {},
      },
    };
  },
  getInitialContext() {
    return {};
  },
  updateContext() {},
  getAppContext() {
    return {};
  },
  startRumSession() {},
  endRumSession() {},
  formatPageKey(k) {
    return k;
  },
  decorateUrl(u) {
    return u;
  },
};

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Build queue according to chosen mode:
// "Progressive" -> Easy -> Medium -> Hard -> Expert in waves
// "Easy" | "Medium" | "Hard" | "Expert" -> shuffled levels of that difficulty
function buildQueueForMode(mode) {
  if (mode === "Easy" || mode === "Medium" || mode === "Hard" || mode === "Expert") {
    const tier = shuffleArray(PUZZLES_BANK.filter((p) => p.difficulty === mode));
    if (mode === "Easy") {
      const p246Idx = tier.findIndex((p) => p.puzzleId === 246);
      if (p246Idx > 0) {
        const [p246] = tier.splice(p246Idx, 1);
        tier.unshift(p246);
      }
    }
    return tier.map((p) => p.puzzleId);
  }

  // Default: "Progressive" (Easy -> Medium -> Hard -> Expert at random)
  const easy = shuffleArray(PUZZLES_BANK.filter((p) => p.difficulty === "Easy"));
  const medium = shuffleArray(PUZZLES_BANK.filter((p) => p.difficulty === "Medium"));
  const hard = shuffleArray(PUZZLES_BANK.filter((p) => p.difficulty === "Hard"));
  const expert = shuffleArray(PUZZLES_BANK.filter((p) => p.difficulty === "Expert"));

  const p246Idx = easy.findIndex((p) => p.puzzleId === 246);
  if (p246Idx > 0) {
    const [p246] = easy.splice(p246Idx, 1);
    easy.unshift(p246);
  }

  const queue = [];
  const waveSize = 3;
  const maxWaves = Math.ceil(
    Math.max(easy.length, medium.length, hard.length, expert.length) / waveSize
  );
  for (let w = 0; w < maxWaves; w++) {
    queue.push(
      ...easy.slice(w * waveSize, (w + 1) * waveSize),
      ...medium.slice(w * waveSize, (w + 1) * waveSize),
      ...hard.slice(w * waveSize, (w + 1) * waveSize),
      ...expert.slice(w * waveSize, (w + 1) * waveSize)
    );
  }
  return queue.map((p) => p.puzzleId);
}

const STORAGE_SOLVED_KEY = "patches_solved_ids_v2";
function loadSolvedSet() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_SOLVED_KEY) || "[]"));
  } catch {
    return new Set();
  }
}
function saveSolvedSet(setObj) {
  try {
    localStorage.setItem(STORAGE_SOLVED_KEY, JSON.stringify([...setObj]));
  } catch {}
}

function makeLinkedInGamePayload(puzzle, instanceSeed) {
  return {
    $type: "proto.com.linkedin.games.api.Game",
    puzzle: {
      $case: "patchesGamePuzzle",
      patchesGamePuzzle: {
        $type: "proto.com.linkedin.games.api.library.PatchesGamePuzzle",
        gridRows: puzzle.gridRows,
        gridCols: puzzle.gridCols,
        clueCells: puzzle.clueCells.map((c) => ({
          $type: "proto.com.linkedin.games.api.library.PatchesClueCell",
          cellIdx: c.cellIdx,
          shapeConstraint: c.shapeConstraint,
          numberConstraint: c.numberConstraint,
        })),
        solution: puzzle.solution.map((s) => ({
          $type: "proto.com.linkedin.games.api.library.PatchesRegion",
          cellIdxes: s.cellIdxes,
        })),
      },
    },
    gameUrn: {
      $type: "proto.com.linkedin.games.GameUrn",
      gameTypeId: 8,
      puzzleId: puzzle.puzzleId,
      player: {
        $type: "proto.com.linkedin.common.MemberUrn",
        memberId: instanceSeed,
      },
    },
    gameState: {
      $type: "proto.com.linkedin.games.api.player.GameState",
      mostRecentGameState: {
        $case: "patchesGameState",
        patchesGameState: {
          $type: "proto.com.linkedin.games.api.player.PatchesGameState",
          drawnRegions: [],
        },
      },
      completionAttributes: {
        $type: "proto.com.linkedin.games.api.player.GameCompletionAttributes",
        isMistakeFree: true,
        isHintFree: true,
      },
    },
    todaysGameEditionText: String(puzzle.puzzleId),
  };
}

const DIFF_MODES = [
  { id: "Progressive", es: "Al azar (Fácil → Difícil)", en: "Random (Easy → Hard)", color: "#0073B1", count: 200 },
  { id: "Easy", es: "Fácil", en: "Easy", color: "#00A651", count: 50 },
  { id: "Medium", es: "Medio", en: "Medium", color: "#00AFFF", count: 50 },
  { id: "Hard", es: "Difícil", en: "Hard", color: "#EF6C00", count: 50 },
  { id: "Expert", es: "Experto", en: "Expert", color: "#7C4DFF", count: 50 },
];

function App() {
  const [screen, setScreen] = React.useState("hub"); // "hub" | "game"
  const [hasStartedOnce, setHasStartedOnce] = React.useState(false);
  const [mode, setMode] = React.useState("Progressive");
  const [queue, setQueue] = React.useState(() => buildQueueForMode("Progressive"));
  const [qIndex, setQIndex] = React.useState(0);
  const [instanceKey, setInstanceKey] = React.useState(1);
  const [hasWon, setHasWon] = React.useState(false);
  const [isTimerHidden, setIsTimerHidden] = React.useState(false);
  const [isTimerPaused, setIsTimerPaused] = React.useState(false);
  const [timeElapsed, setTimeElapsed] = React.useState(0);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [locale, setLocale] = React.useState("es_ES");
  const [solvedIds, setSolvedIds] = React.useState(() => loadSolvedSet());

  const currentPuzzleId = queue[qIndex] ?? PUZZLES_BANK[0].puzzleId;
  const currentPuzzle = React.useMemo(
    () =>
      PUZZLES_BANK.find((p) => p.puzzleId === currentPuzzleId) || PUZZLES_BANK[0],
    [currentPuzzleId]
  );

  const gamePayload = React.useMemo(
    () => makeLinkedInGamePayload(currentPuzzle, instanceKey),
    [currentPuzzle, instanceKey]
  );

  const i18nValue = React.useMemo(
    () => ({
      isDev: false,
      liLocale: locale,
      messages: locale === "en_US" ? MESSAGES_EN : MESSAGES_ES,
    }),
    [locale]
  );

  const startNewGameWithMode = React.useCallback((selectedMode) => {
    const newQ = buildQueueForMode(selectedMode);
    setMode(selectedMode);
    setQueue(newQ);
    setQIndex(0);
    setHasWon(false);
    setTimeElapsed(0);
    setIsTimerPaused(false);
    setMenuOpen(false);
    setHasStartedOnce(true);
    setInstanceKey((k) => k + 1);
    setScreen("game");
  }, []);

  const goToNextRandomLevel = React.useCallback(() => {
    setMenuOpen(false);
    setHasWon(false);
    setTimeElapsed(0);
    setIsTimerPaused(false);
    setQIndex((prev) => {
      const next = prev + 1;
      if (next >= queue.length) {
        const newQ = buildQueueForMode(mode);
        setQueue(newQ);
        return 0;
      }
      return next;
    });
    setInstanceKey((k) => k + 1);
    setScreen("game");
  }, [queue.length, mode]);

  const handleResetBoard = React.useCallback(
    (e) => {
      if (e && e.preventDefault) e.preventDefault();
      if (hasWon) {
        setHasWon(false);
        setTimeElapsed(0);
        setInstanceKey((k) => k + 1);
        return;
      }
      if (typeof window.postGameMessage === "function") {
        window.postGameMessage(JSON.stringify({ message: "clear", payload: {} }));
      } else {
        setInstanceKey((k) => k + 1);
      }
    },
    [hasWon]
  );

  const markCurrentSolved = React.useCallback(() => {
    setHasWon(true);
    setSolvedIds((prev) => {
      const next = new Set(prev);
      next.add(currentPuzzle.puzzleId);
      saveSolvedSet(next);
      return next;
    });
  }, [currentPuzzle.puzzleId]);

  const isEn = locale === "en_US";

  // Count solved per difficulty
  const solvedCounts = React.useMemo(() => {
    const counts = { All: 0, Easy: 0, Medium: 0, Hard: 0, Expert: 0 };
    for (const p of PUZZLES_BANK) {
      if (solvedIds.has(p.puzzleId)) {
        counts.All++;
        if (counts[p.difficulty] !== undefined) counts[p.difficulty]++;
      }
    }
    return counts;
  }, [solvedIds]);

  return jsx(ThemeProvider, {
    theme: "light",
    darkThemeClass: "bsjloo",
    children: jsx(TrackingContext.Provider, {
      value: MOCK_TRACKING,
      children: jsx(LixContext.Provider, {
        value: MOCK_LIX,
        children: jsx(I18nContext.Provider, {
          value: i18nValue,
          children: jsxs("div", {
            className: "bsjl5q",
            "data-sdui-screen":
              "com.linkedin.sdui.flagshipnav.games.GamePlayMobileWebPage",
            children: [
              jsx("div", {
                className:
                  "bsjlkx bsjlk3 bsjlky bsjlkv bsjay6 bsjhtz bsja29 bsjh97 bsjlk1 bsjlk6 bsjl5q",
                children: jsx("div", {
                  className:
                    "bsjlk9 bsjlkl bsjlk8 bsjay6 bsjhtr bsja29 bsjh97 bsjlla bsjlld bsjllf bsjlli bsjllj bsjlll bsjlln bsjl5q",
                  "data-layout-grid": "",
                  children: jsxs("div", {
                    className:
                      "bsjlmk bsjlkm bsjlmj bsjay6 bsjhtr bsja29 bsjj2d bsjlmm bsjlmp bsjlmq bsjlkp bsjl5q",
                    children: [
                      // TOOLBAR
                      jsx("div", {
                        className:
                          "bsjlmx bsjlmu bsjj49 bsjh93 bsjlmy bsjlmv bsjj22 bsjk4d bsjl5q",
                        role: "toolbar",
                        children: jsxs("div", {
                          className:
                            "bsjl5w bsjayy bsjiun bsjj1t bsjj08 bsjj1j bsjixb bsjia7 bsjdh7 bsjl5q",
                          style: {
                            "--bsjbfl":
                              "light-dark(rgb(248 250 253 / 1), rgb(27 31 35 / 1))",
                          },
                          children: [
                            jsxs("div", {
                              className:
                                "bsjldd bsjldu bsja2a bsjht3 bsjia7 bsjl5q",
                              children: [
                                jsxs("div", {
                                  className:
                                    "bsjayy bsjiu3 bsjj1v bsjj03 bsjj1j bsjixb bsjia7 bsjk56 bsjk5x bsjl5q",
                                  children: [
                                    // Top-left button: Back to Hub (when in game) or Resume Game (when in hub)
                                    jsx("div", {
                                      className:
                                        "bsjayy bsjiu3 bsjj1t bsjj03 bsjj1j bsjiyn bsjl5q",
                                      children:
                                        screen === "game"
                                          ? jsx("button", {
                                              className:
                                                "bsjlxl bsjlxk bsjt0 bsja26 bsjhn4 bsjlho bsjli7 bsjlxq bsjlxn bsjlxm bsjazu bsjj03 bsjj2d",
                                              type: "button",
                                              "aria-label": isEn ? "Back" : "Volver",
                                              onClick: () => {
                                                setMenuOpen(false);
                                                setIsTimerPaused(true);
                                                setScreen("hub");
                                              },
                                              children: jsx("span", {
                                                className:
                                                  "bsjlzr bsjlyb bsjlx6 bsjivr bsjj03 bsjt0 bsja26 bsjazu bsjix7 bsjj1r bsjlho bsjli7 bsjk6u bsjk65 bsjlyh bsjlyp bsjlyn bsjlym bsjlx9 bsjh13 bsjly0 bsjly4 bsjly6 bsjly7",
                                                children: jsx(DesignSystemImage, {
                                                  display: "block",
                                                  imageId: 430,
                                                  "aria-label": "",
                                                  "aria-hidden": true,
                                                  enableForcedColorStyles: false,
                                                  width: "3x",
                                                  minWidth: "3x",
                                                  height: "3x",
                                                  minHeight: "3x",
                                                  className: "bsjl9m",
                                                }),
                                              }),
                                            })
                                          : jsx("div", {
                                              style: { width: "40px", height: "40px" },
                                            }),
                                    }),
                                    // Top-right settings gear button
                                    jsx("div", {
                                      className:
                                        "bsjayy bsjiu3 bsjj1t bsjj08 bsjj1j bsjiy3 bsjl5q",
                                      children: jsxs("div", {
                                        className:
                                          "bsja2a bsjhtn bsjiaf bsjl5q",
                                        style: { position: "relative" },
                                        children: [
                                          jsx("button", {
                                            className:
                                              "bsjlxl bsjlxk bsjt0 bsja26 bsjhn4 bsjlho bsjli7 bsjlxq bsjlxn bsjlxm bsjazu bsjj03 bsjj2d bsjk56 bsjk5x",
                                            type: "button",
                                            "aria-label": isEn ? "Settings" : "Ajustes",
                                            onClick: () => setMenuOpen((o) => !o),
                                            children: jsx("span", {
                                              className:
                                                "bsjlzr bsjlyb bsjlx6 bsjivr bsjj03 bsjt0 bsja26 bsjazu bsjix7 bsjj1r bsjlho bsjli7 bsjk6u bsjk65 bsjlyh bsjlyp bsjlyn bsjlym bsjlx9 bsjh13 bsjly0 bsjly4 bsjly6 bsjly7",
                                              children: jsx(DesignSystemImage, {
                                                display: "block",
                                                imageId: 377,
                                                "aria-label": "",
                                                "aria-hidden": true,
                                                enableForcedColorStyles: false,
                                                width: "3x",
                                                minWidth: "3x",
                                                height: "3x",
                                                minHeight: "3x",
                                                className: "bsjl9m",
                                              }),
                                            }),
                                          }),
                                          menuOpen &&
                                            jsxs("div", {
                                              className:
                                                "bsjl5w bsjayy bsjiun bsjj1t bsjj08 bsjj1j bsjixb bsjl5q",
                                              role: "menu",
                                              style: {
                                                position: "absolute",
                                                top: "100%",
                                                right: 0,
                                                zIndex: 1000,
                                                width: "250px",
                                                backgroundColor: "#FFFFFF",
                                                borderRadius: "8px",
                                                boxShadow:
                                                  "0 4px 16px rgba(0, 0, 0, 0.16)",
                                                border: "1px solid rgba(0,0,0,0.08)",
                                                overflow: "hidden",
                                              },
                                              children: [
                                                // 1. Toggle Clock
                                                jsx("button", {
                                                  type: "button",
                                                  role: "menuitem",
                                                  onClick: () => {
                                                    setIsTimerHidden((h) => !h);
                                                    setMenuOpen(false);
                                                  },
                                                  style: {
                                                    width: "100%",
                                                    border: "none",
                                                    background: "transparent",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                  },
                                                  children: jsxs("div", {
                                                    className:
                                                      "bsjivr bsjlcb bsjlcs bsjldc bsjldt bsjayy bsjiu3 bsjj1v bsjj03 bsjj1j bsjixb bsjl5q",
                                                    children: [
                                                      jsxs("div", {
                                                        className:
                                                          "bsjayy bsjiu3 bsjj1t bsjj03 bsjj1j bsjixb bsjl5q",
                                                        style: { gap: "8px" },
                                                        children: [
                                                          jsx(DesignSystemImage, {
                                                            display: "block",
                                                            imageId: 170,
                                                            "aria-label": "",
                                                            "aria-hidden": true,
                                                            enableForcedColorStyles: false,
                                                            className: "bsjl9m",
                                                          }),
                                                          jsx("p", {
                                                            className:
                                                              "bsjlje bsjlo1 bsjivr bsjlal bsjlis bsjgoj bsjljc bsjlrm",
                                                            children: isEn
                                                              ? "Show clock"
                                                              : "Mostrar reloj",
                                                          }),
                                                        ],
                                                      }),
                                                      jsx("span", {
                                                        className:
                                                          "bsjlje bsjlo1 bsjhn4",
                                                        style: {
                                                          color: !isTimerHidden
                                                            ? "#0073B1"
                                                            : "#666666",
                                                        },
                                                        children: !isTimerHidden
                                                          ? isEn
                                                            ? "On"
                                                            : "Sí"
                                                          : "No",
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                // 2. Skip to Next Random Level
                                                jsx("button", {
                                                  type: "button",
                                                  role: "menuitem",
                                                  onClick: goToNextRandomLevel,
                                                  style: {
                                                    width: "100%",
                                                    border: "none",
                                                    background: "transparent",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                  },
                                                  children: jsx("div", {
                                                    className:
                                                      "bsjivr bsjlcd bsjlcu bsjldd bsjldu bsjayy bsjiu3 bsjj1t bsjj03 bsjj1j bsjixb bsjl5q",
                                                    children: jsx("p", {
                                                      className:
                                                        "bsjlje bsjlo1 bsjlis bsjgoj bsjljc bsjlrm",
                                                      children: isEn
                                                        ? "New random level"
                                                        : "Nuevo nivel al azar",
                                                    }),
                                                  }),
                                                }),
                                                // 3. Go to Hub
                                                screen === "game" &&
                                                  jsx("button", {
                                                    type: "button",
                                                    role: "menuitem",
                                                    onClick: () => {
                                                      setMenuOpen(false);
                                                      setIsTimerPaused(true);
                                                      setScreen("hub");
                                                    },
                                                    style: {
                                                      width: "100%",
                                                      border: "none",
                                                      background: "transparent",
                                                      cursor: "pointer",
                                                      textAlign: "left",
                                                    },
                                                    children: jsx("div", {
                                                      className:
                                                        "bsjivr bsjlcd bsjlcu bsjldd bsjldu bsjayy bsjiu3 bsjj1t bsjj03 bsjj1j bsjixb bsjl5q",
                                                      children: jsx("p", {
                                                        className:
                                                          "bsjlje bsjlo1 bsjlis bsjgoj bsjljc bsjlrm",
                                                        children: isEn
                                                          ? "Difficulty menu"
                                                          : "Elegir dificultad",
                                                      }),
                                                    }),
                                                  }),
                                                // 4. Language Toggle (ES / EN)
                                                jsx("button", {
                                                  type: "button",
                                                  role: "menuitem",
                                                  onClick: () => {
                                                    setLocale((l) =>
                                                      l === "es_ES"
                                                        ? "en_US"
                                                        : "es_ES"
                                                    );
                                                    setMenuOpen(false);
                                                  },
                                                  style: {
                                                    width: "100%",
                                                    border: "none",
                                                    background: "transparent",
                                                    cursor: "pointer",
                                                    textAlign: "left",
                                                  },
                                                  children: jsx("div", {
                                                    className:
                                                      "bsjivr bsjlcb bsjlcs bsjldc bsjldt bsjayy bsjiu3 bsjj1t bsjj03 bsjj1j bsjix7 bsjl5q",
                                                    children: jsx("p", {
                                                      className:
                                                        "bsjlje bsjlo1 bsjlis bsjgoj bsjljc bsjlrm",
                                                      children: isEn
                                                        ? "Language: English"
                                                        : "Idioma: Español",
                                                    }),
                                                  }),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                // Patches title (without LinkedIn logo)
                                jsx("div", {
                                  className:
                                    "bsjl5w bsjayy bsjiun bsjj1t bsjj03 bsjj1j bsjixb bsjk56 bsjk5x bsjl5q",
                                  children: jsx("div", {
                                    className:
                                      "bsjayy bsjiu3 bsjj1t bsjj03 bsjj1j bsjixb bsjl5q",
                                    children: jsx("div", {
                                      className: "bsjlis bsjgoj bsjljc",
                                      children: jsx("p", {
                                        className:
                                          "bsjlje bsjlo7 bsjlr6 bsjlr5 bsjlr4 bsja29 bsjljd bsjht3 bsjlrm",
                                        children: jsx("span", {
                                          children: "Patches",
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            // Second toolbar row (only visible during game): Timer + Restablecer button
                            screen === "game" &&
                              jsxs("div", {
                                className:
                                  "bsjldd bsjldu bsjayy bsjiu3 bsjj1v bsjj03 bsjj1j bsjixb bsjia7 bsjl5q",
                                children: [
                                  jsx("div", {
                                    className: "bsja2a bsjht3 bsjiaf bsjl5q",
                                    children:
                                      !isTimerHidden &&
                                      jsxs("div", {
                                        className:
                                          "bsjayy bsjiu3 bsjj1t bsjj03 bsjj1j bsjixb bsjk56 bsjk5x bsjl5q",
                                        children: [
                                          jsx(DesignSystemImage, {
                                            display: "block",
                                            imageId: 171,
                                            "aria-label": "Clock",
                                            "aria-hidden": false,
                                            enableForcedColorStyles: false,
                                            offsetEnd: "0.5x",
                                            height: "2x",
                                            width: "2x",
                                            flexShrink: 0,
                                            className: "bsjl9m",
                                          }),
                                          jsx(
                                            Timer,
                                            {
                                              timeInMs: timeElapsed,
                                              isRunning: !hasWon && !isTimerPaused,
                                              onTimeUpdate: (ms) =>
                                                setTimeElapsed(Number(ms)),
                                              alignSelf: "center",
                                            },
                                            `timer-${currentPuzzle.puzzleId}-${instanceKey}`
                                          ),
                                        ],
                                      }),
                                  }),
                                  jsx("div", {
                                    className:
                                      "bsjivr bsja2a bsjht3 bsjiaf bsjl5q",
                                    children: jsx("button", {
                                      type: "button",
                                      className:
                                        "bsjlxl bsjlxk bsjt0 bsja26 bsjhn4 bsjlho bsjli7 bsjlxp bsjlxn bsjlxm bsjazu bsjj03 bsjj2d bsjiaf bsjk57 bsjk5x",
                                      onClick: handleResetBoard,
                                      children: jsx("span", {
                                        className:
                                          "bsjlzr bsjlyb bsjlx6 bsjivr bsjj03 bsjt0 bsja26 bsjazu bsjix7 bsjj1r bsjlho bsjli7 bsjk6u bsjk65 bsjlyf bsjlyp bsjlyl bsjlx8 bsjh1v bsjlyw",
                                        children: jsx("span", {
                                          className:
                                            "bsjlje bsjlo1 bsjhn4 bsjljc bsjly8",
                                          children: isEn ? "Reset" : "Restablecer",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),

                      // WORKSPACE: HUB SCREEN OR GAME SCREEN
                      jsx("main", {
                        className:
                          "bsjlm5 bsjljs bsjlm4 bsjj07 bsjay6 bsja3d bsja3i bsjj2d bsjlm6 bsjl5q",
                        id: "workspace",
                        tabIndex: -1,
                        onClick: () => {
                          if (menuOpen) setMenuOpen(false);
                        },
                        children: jsxs("div", {
                          className:
                            "bsjl5w bsjayy bsjiun bsjj1t bsjj08 bsjj1j bsjixb bsjhub bsjia7 bsjdh7 bsjl5q",
                          style: {
                            "--bsjbfl":
                              "light-dark(rgb(248 250 253 / 1), rgb(27 31 35 / 1))",
                          },
                          children: [
                            // HUB SCREEN
                            screen === "hub" &&
                              jsx("div", {
                                className: "bsja2a bsjht3 bsjia7 bsjl5q",
                                style: {
                                  maxWidth: "420px",
                                  width: "100%",
                                  margin: "0 auto",
                                  padding: "16px 16px 32px",
                                },
                                children: jsxs("div", {
                                  className: "bsjm48 bsjaet",
                                  style: {
                                    padding: "24px 20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "18px",
                                  },
                                  children: [
                                    // Mini Patches Board Icon inside Hub
                                    jsx("img", {
                                      src: "./icon.svg",
                                      alt: "Patches",
                                      style: {
                                        width: "88px",
                                        height: "88px",
                                        borderRadius: "20px",
                                      },
                                    }),

                                    // Solved progress pill
                                    jsx("div", {
                                      style: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "4px 14px",
                                        borderRadius: "999px",
                                        backgroundColor: "rgb(248, 250, 253)",
                                        border: "1px solid #C3C3C3",
                                      },
                                      children: jsx("span", {
                                        className: "bsjlje bsjlo1 bsjhn4",
                                        children: isEn
                                          ? `${solvedCounts.All} / ${PUZZLES_BANK.length} levels`
                                          : `${solvedCounts.All} / ${PUZZLES_BANK.length} niveles`,
                                      }),
                                    }),

                                    // Difficulty Selector Pills
                                    jsxs("div", {
                                      style: {
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "8px",
                                      },
                                      children: DIFF_MODES.map((dm) => {
                                        const active = mode === dm.id;
                                        const solvedInTier =
                                          dm.id === "Progressive"
                                            ? solvedCounts.All
                                            : solvedCounts[dm.id] || 0;
                                        return jsx(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => setMode(dm.id),
                                            style: {
                                              width: "100%",
                                              display: "flex",
                                              alignItems: "center",
                                              justifyContent: "space-between",
                                              padding: "12px 16px",
                                              borderRadius: "999px",
                                              border: active
                                                ? `2px solid ${dm.color}`
                                                : "1px solid #C3C3C3",
                                              backgroundColor: active
                                                ? `${dm.color}18`
                                                : "#FFFFFF",
                                              cursor: "pointer",
                                              transition: "all 120ms ease",
                                            },
                                            children: [
                                              jsxs("span", {
                                                style: {
                                                  display: "inline-flex",
                                                  alignItems: "center",
                                                  gap: "10px",
                                                },
                                                children: [
                                                  jsx("span", {
                                                    style: {
                                                      width: "14px",
                                                      height: "14px",
                                                      borderRadius: "4px",
                                                      backgroundColor: dm.color,
                                                      display: "inline-block",
                                                    },
                                                  }),
                                                  jsx("span", {
                                                    className:
                                                      "bsjlje bsjlo1 bsjhn4",
                                                    style: {
                                                      color: "#1B1F23",
                                                      fontWeight: active
                                                        ? "700"
                                                        : "600",
                                                    },
                                                    children: isEn
                                                      ? dm.en
                                                      : dm.es,
                                                  }),
                                                ],
                                              }),
                                              jsx("span", {
                                                className: "bsjlje bsjlo1",
                                                style: {
                                                  color: "#666666",
                                                  fontSize: "13px",
                                                },
                                                children: `${solvedInTier} / ${dm.count}`,
                                              }),
                                            ],
                                          },
                                          dm.id
                                        );
                                      }),
                                    }),

                                    // Action Buttons: Jugar (New game in selected mode) & Continuar (Resume active board)
                                    jsxs("div", {
                                      style: {
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "10px",
                                        marginTop: "4px",
                                      },
                                      children: [
                                        jsx("button", {
                                          type: "button",
                                          className:
                                            "bsjlxl bsjlxk bsjt0 bsja26 bsjhn4 bsjlho bsjli7 bsjlxq bsjlxn bsjlxm bsjazu bsjj03 bsjj2d bsjia7 bsjk52 bsjk5x",
                                          onClick: () =>
                                            startNewGameWithMode(mode),
                                          children: jsx("span", {
                                            className:
                                              "bsjlzr bsjlyb bsjlx6 bsjivr bsjj03 bsjt0 bsja26 bsjazu bsjix7 bsjj1r bsjlho bsjli7 bsjk6u bsjk65 bsjlye bsjlyo bsjlym bsjlx9 bsjh13 bsjlyv",
                                            style: {
                                              "--bsjlxr": "var(--bsjb7)",
                                              "--bsjlxs": "var(--bsjb8)",
                                              "--bsjlxt": "var(--bsjb9)",
                                              "--bsjlxu": "var(--bsjcg)",
                                              "--bsjlxv": "var(--bsjez)",
                                              "--bsjlxz": "var(--bsjez)",
                                              "--bsjlxw": "var(--bsje0)",
                                              "--bsjlx0": "var(--bsje0)",
                                              "--bsjlxx": "var(--bsje1)",
                                              "--bsjlx1": "var(--bsje1)",
                                              "--bsjlxy": "var(--bsjey)",
                                            },
                                            children: jsx("span", {
                                              className:
                                                "bsjlje bsjlo3 bsjhn4 bsjljc bsjly8",
                                              children: isEn ? "Play" : "Jugar",
                                            }),
                                          }),
                                        }),
                                        hasStartedOnce &&
                                          !hasWon &&
                                          jsx("button", {
                                            type: "button",
                                            className:
                                              "bsjlxl bsjlxk bsjt0 bsja26 bsjhn4 bsjlho bsjli7 bsjlxp bsjlxn bsjlxm bsjazu bsjj03 bsjj2d bsjia7 bsjk57 bsjk5x",
                                            onClick: () => {
                                              setIsTimerPaused(false);
                                              setScreen("game");
                                            },
                                            children: jsx("span", {
                                              className:
                                                "bsjlzr bsjlyb bsjlx6 bsjivr bsjj03 bsjt0 bsja26 bsjazu bsjix7 bsjj1r bsjlho bsjli7 bsjk6u bsjk65 bsjlyf bsjlyp bsjlyl bsjlx8 bsjh1v bsjlyw",
                                              style: { width: "100%" },
                                              children: jsx("span", {
                                                className:
                                                  "bsjlje bsjlo1 bsjhn4 bsjljc bsjly8",
                                                children: isEn
                                                  ? "Continue puzzle"
                                                  : "Continuar partida",
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),

                            // GAME SCREEN (kept mounted when in game; hidden when in hub so state is preserved if user taps Continuar!)
                            jsx("div", {
                              className: "bsja2a bsjht3 bsjia7 bsjl5q",
                              style:
                                screen === "hub" ? { display: "none" } : undefined,
                              children: jsx(
                                Patches,
                                {
                                  game: gamePayload,
                                  timeElapsed: 0,
                                  isMobile: true,
                                  isBonusGame: false,
                                  isHintCooldownDisabled: true,
                                  isReadFromLocalStorageDisabled: true,
                                  isWriteToLocalStorageDisabled: true,
                                  isPatchesRevealFirstRegionLixEnabled: false,
                                  isPatchesCorrectSpotFlashLixEnabled: true,
                                  isCorrectionHintNoCooldownEnabled: true,
                                  isCorrectionHintChainedEnabled: true,
                                  winCount: 33,
                                  totalPlaysCount: 33,
                                  offsetBottom: "12x",
                                  width: "fillAvailable",
                                  maxWidth: "68x",
                                  location: "topCenter",
                                  isolation: "isolate",
                                  getIsTimerHidden: () => isTimerHidden,
                                  getVisibilitySetting: () => "CONNECTIONS",
                                  getGameScoreVisibilitySetting: () =>
                                    "CONNECTIONS",
                                  onUpdateIsTimerHidden: (val) =>
                                    setIsTimerHidden(!!val),
                                  onUpdateIsUndoDisabled: () => {},
                                  onUpdateVisibilitySettings: () => {},
                                  onSettingsDismiss: () => {},
                                  onUpdateTimeElapsed: () => {},
                                  onError: () => {},
                                  onGameReady: () => {},
                                  onGameAction: () => {},
                                  onFirstBoardAction: () => {},
                                  onOpenTutorialInfo: () => {},
                                  onUpdateBoardState: () => {},
                                  onUpdateNumRedraws: () => {},
                                  onGameMistakeAction: () => {},
                                  onUpdateHasWon: (won) => {
                                    if (won) markCurrentSolved();
                                  },
                                  onGameComplete: () => {
                                    markCurrentSolved();
                                  },
                                  onGameBlur: () => setIsTimerPaused(true),
                                  onGameFocus: () => {
                                    if (screen === "game")
                                      setIsTimerPaused(false);
                                  },
                                },
                                `patches-${currentPuzzle.puzzleId}-${instanceKey}`
                              ),
                            }),

                            // Bottom completion button bar on Game Screen
                            screen === "game" &&
                              hasWon &&
                              jsx("div", {
                                className:
                                  "bsjkmd bsjlch bsjlcy bsjldd bsjldu bsjj15 bsjkdx bsjk4l bsja2a bsjhtn bsjia7 bsjbtq bsjl5q",
                                children: jsx("button", {
                                  type: "button",
                                  className:
                                    "bsjlxl bsjlxk bsjt0 bsja26 bsjhn4 bsjlho bsjli7 bsjlxq bsjlxn bsjlxm bsjazu bsjj03 bsjj2d bsjia7 bsjk52 bsjk5x",
                                  onClick: goToNextRandomLevel,
                                  children: jsx("span", {
                                    className:
                                      "bsjlzr bsjlyb bsjlx6 bsjivr bsjj03 bsjt0 bsja26 bsjazu bsjix7 bsjj1r bsjlho bsjli7 bsjk6u bsjk65 bsjlye bsjlyo bsjlym bsjlx9 bsjh13 bsjlyv",
                                    style: {
                                      "--bsjlxr": "var(--bsjb7)",
                                      "--bsjlxs": "var(--bsjb8)",
                                      "--bsjlxt": "var(--bsjb9)",
                                      "--bsjlxu": "var(--bsjcg)",
                                      "--bsjlxv": "var(--bsjez)",
                                      "--bsjlxz": "var(--bsjez)",
                                      "--bsjlxw": "var(--bsje0)",
                                      "--bsjlx0": "var(--bsje0)",
                                      "--bsjlxx": "var(--bsje1)",
                                      "--bsjlx1": "var(--bsje1)",
                                      "--bsjlxy": "var(--bsjey)",
                                    },
                                    children: jsx("span", {
                                      className:
                                        "bsjlje bsjlo3 bsjhn4 bsjljc bsjly8",
                                      children: isEn
                                        ? "Next puzzle"
                                        : "Siguiente nivel",
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  });
}

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOMClient.createRoot(rootEl);
  root.render(jsx(App, {}));
}
