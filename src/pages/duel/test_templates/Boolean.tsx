import React, {FunctionComponent} from "react";

export const Boolean: FunctionComponent = () => <aside>
    {/*Boolean*/}
    <form className="boolean">
                    <div>
                        <input type="radio" id="test_option_1" className="boolean"
                               name="boolean" value="true"/>
                        <label htmlFor="test_option_1">
                            Твердження вірне
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="test_option_2" className="boolean"
                               name="boolean" value="false"/>
                        <label htmlFor="test_option_2">
                            Твердження не вірне
                        </label>
                    </div>
    </form>
    {/*END - Boolean*/}
</aside>;


