import { DataTypes, Model,Optional } from 'sequelize';
import {sequelize} from ".";


interface TagProps {
    id:number,
    tagname: string,
}

export interface TagCreationProps
extends Optional<TagProps,'id'>{}

interface TagInstance 
extends Model<TagProps,TagCreationProps>,
TagProps{
    createdAt?:Date;
    updatedAt?: Date;
}

const Tag = sequelize.define<TagInstance>(
    'Tag',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true,
        },
        tagname: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        }
    }
)

export default Tag;