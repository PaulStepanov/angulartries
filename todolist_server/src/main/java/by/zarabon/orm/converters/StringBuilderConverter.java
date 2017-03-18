package by.zarabon.orm.converters;

import javax.persistence.AttributeConverter;

public class StringBuilderConverter implements AttributeConverter<StringBuilder,String> {
    @Override
    public String convertToDatabaseColumn(StringBuilder stringBuilder) {
        return stringBuilder.toString();
    }

    @Override
    public StringBuilder convertToEntityAttribute(String s) {
        return new StringBuilder(s);
    }
}
