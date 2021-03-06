import { Logic } from "../../../script/common/base/Logic";
import { LogicType, LogicEvent } from "../../../script/common/event/LogicEvent";
import { uiManager } from "../../../script/framework/base/UIManager";
import GameOneView from "./GameOneView";
import { logicManager } from "../../../script/common/manager/LogicManager";

class GameOneLogic extends Logic {

    logicType: LogicType = LogicType.GAME;

    onLoad() {
        super.onLoad();
    }

    protected bindingEvents() {
        super.bindingEvents();
        this.registerEvent(LogicEvent.ENTER_GAME, this.onEnterGame);
    }

    protected getGameName() {
        return "gameOne";
    }

    private onEnterGame(data) {
        if (data == this.getGameName()) {
            uiManager().open({ type: GameOneView, bundle: this.getGameName() });
        }
    }
}

logicManager().push(GameOneLogic);